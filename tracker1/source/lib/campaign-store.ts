import { env } from 'cloudflare:workers';
import seed from './initial-campaign.json';
import source from '../public/source-plan.json';
import { init,duplicate,validate,today } from '../public/engine.js';
type Head={version:number;head:string;parent:string|null;payload:string};
function db(){if(!env.DB)throw Error('Campaign storage is unavailable.');return env.DB}
export async function readHead():Promise<Head>{
 let row=await db().prepare('SELECT c.version,c.head,s.parent,s.payload FROM campaign c JOIN snapshots s ON s.id=c.head WHERE c.id=?').bind('main').first<Head>();
 if(!row){
  const errors=validate(seed,today());if(errors.length)throw Error('Initial campaign failed validation: '+errors.join('; '));
  await db().batch([
   db().prepare('INSERT OR IGNORE INTO snapshots(id,parent,payload,created_at) VALUES(?,?,?,?)').bind('initial',null,JSON.stringify(seed),new Date().toISOString()),
   db().prepare('INSERT OR IGNORE INTO campaign(id,version,head) VALUES(?,?,?)').bind('main',seed.version,'initial')
  ]);
  row=await db().prepare('SELECT c.version,c.head,s.parent,s.payload FROM campaign c JOIN snapshots s ON s.id=c.head WHERE c.id=?').bind('main').first<Head>();
 }
 if(!row)throw Error('Could not initialise campaign storage.');return row;
}
export async function readState(){const row=await readHead();return {...JSON.parse(row.payload),version:row.version}}
export async function mutate(operation:string,body:any,actor:string){
 const row=await readHead(),current={...JSON.parse(row.payload),version:row.version};
 if(body.version!==row.version)return {status:409,data:{error:'This campaign changed in another window. Refresh before saving.'}};
 let next:any,parent:string|null=row.head;
 if(operation==='save'||operation==='import'){
  next=body.state;
  if(operation==='save'&&JSON.stringify(next.videos.map((v:any)=>[v.id,v.creator,v.baseline]))!==JSON.stringify(current.videos.map((v:any)=>[v.id,v.creator,v.baseline])))return {status:400,data:{error:'Original video IDs and plan dates cannot be overwritten.'}};
 }else if(operation==='undo'){
  if(!row.parent)return {status:400,data:{error:'Nothing to undo.'}};
  const previous=await db().prepare('SELECT parent,payload FROM snapshots WHERE id=?').bind(row.parent).first<{parent:string|null;payload:string}>();
  if(!previous)throw Error('The undo snapshot is unavailable.');next=JSON.parse(previous.payload);parent=previous.parent;
 }else if(operation==='reset')next=init(source);
 else if(operation==='duplicate')next=duplicate(source,body.name,body.start||'2026-10-13');
 else return {status:404,data:{error:'Unknown operation.'}};
 const errors=validate(next,today());if(errors.length)return {status:400,data:{error:errors.slice(0,8).join('\n')}};
 next.version=row.version+1;
 next.audit=[...current.audit,{at:new Date().toISOString(),description:String(body.description||operation).slice(0,6000),version:next.version,actor}].slice(-200);
 const payload=JSON.stringify(next);
 if(new TextEncoder().encode(payload).length>1500000)return {status:413,data:{error:'Campaign exceeds the storage limit. Export a backup and shorten long notes.'}};
 const id=crypto.randomUUID();
 const result=await db().batch([
  db().prepare('INSERT INTO snapshots(id,parent,payload,created_at) VALUES(?,?,?,?)').bind(id,parent,payload,new Date().toISOString()),
  db().prepare('UPDATE campaign SET head=?,version=? WHERE id=? AND version=?').bind(id,next.version,'main',row.version)
 ]);
 if(result[1].meta.changes!==1)return {status:409,data:{error:'Another update was saved first. Refresh and retry.'}};
 return {status:200,data:next};
}
