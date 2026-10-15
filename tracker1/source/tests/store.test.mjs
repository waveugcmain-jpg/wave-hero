import test from 'node:test';
import assert from 'node:assert/strict';
import {DatabaseSync} from 'node:sqlite';
import fs from 'node:fs/promises';
import ts from 'typescript';
const root=new URL('../',import.meta.url);
test('Hosted database saves, rejects stale writes, preserves baseline and supports repeated undo',async()=>{
 const sqlite=new DatabaseSync(':memory:');
 const migrationFiles=(await fs.readdir(new URL('drizzle/',root))).filter(x=>x.endsWith('.sql'));
 for(const file of migrationFiles)sqlite.exec(await fs.readFile(new URL('drizzle/'+file,root),'utf8'));
 function statement(sql,values=[]){return {bind(...v){return statement(sql,v)},async first(){return sqlite.prepare(sql).get(...values)||null},run(){const r=sqlite.prepare(sql).run(...values);return {meta:{changes:Number(r.changes)}}}}}
 globalThis.waveTestDB={prepare:statement,async batch(statements){sqlite.exec('BEGIN');try{const result=statements.map(s=>s.run());sqlite.exec('COMMIT');return result}catch(e){sqlite.exec('ROLLBACK');throw e}}};
 let source=await fs.readFile(new URL('lib/campaign-store.ts',root),'utf8');
 source=source.replace("import { env } from 'cloudflare:workers';",'const env={DB:globalThis.waveTestDB};');
 source=source.replace("import seed from './initial-campaign.json';",'const seed='+await fs.readFile(new URL('lib/initial-campaign.json',root),'utf8')+';');
 source=source.replace("import source from '../public/source-plan.json';",'const source='+await fs.readFile(new URL('public/source-plan.json',root),'utf8')+';');
 const moduleURL=new URL('.sites-runtime/store-test.mjs',root);
 await fs.mkdir(new URL('.sites-runtime/',root),{recursive:true});
 await fs.writeFile(moduleURL,ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText);
 const store=await import(moduleURL.href+'?test='+Date.now());
 const original=await store.readState();assert.equal(original.videos.length,100);
 const first=structuredClone(original);first.videos[0].notes='First test edit';
 assert.equal((await store.mutate('save',{state:first,version:original.version},'test-user')).status,200);
 assert.equal((await store.mutate('save',{state:first,version:original.version},'test-user')).status,409);
 const second=await store.readState();second.videos[0].notes='Second test edit';
 assert.equal((await store.mutate('save',{state:second,version:second.version},'test-user')).status,200);
 let saved=await store.readState();assert.equal(saved.videos[0].notes,'Second test edit');
 const bad=structuredClone(saved);bad.videos[0].baseline.raw='2026-10-22';
 assert.equal((await store.mutate('save',{state:bad,version:saved.version},'test-user')).status,400);
 assert.equal((await store.mutate('undo',{version:saved.version},'test-user')).status,200);
 saved=await store.readState();assert.equal(saved.videos[0].notes,'First test edit');
 assert.equal((await store.mutate('undo',{version:saved.version},'test-user')).status,200);
 saved=await store.readState();assert.equal(saved.videos[0].notes,original.videos[0].notes);
 const concurrent=await Promise.all([store.mutate('save',{state:structuredClone(saved),version:saved.version},'one'),store.mutate('save',{state:structuredClone(saved),version:saved.version},'two')]);
 assert.deepEqual(concurrent.map(x=>x.status).sort(),[200,409]);
 sqlite.close();delete globalThis.waveTestDB;
});

test('Missed-day migration preserves live actuals, creates undo snapshot and is idempotent',async()=>{
 const db=new DatabaseSync(':memory:');db.exec(await fs.readFile(new URL('drizzle/0000_rare_thunderbolt_ross.sql',root),'utf8'));
 const seed=JSON.parse(await fs.readFile(new URL('lib/initial-campaign.json',root),'utf8'));seed.version=47;seed.videos[0].notes='Live team note';seed.videos[0].actual.drafted='2026-10-15';delete seed.settings.capacityExceptions['2026-10-14'];
 db.prepare('INSERT INTO snapshots VALUES(?,?,?,?)').run('live',null,JSON.stringify(seed),'now');db.prepare('INSERT INTO campaign VALUES(?,?,?)').run('main',47,'live');
 const migration=await fs.readFile(new URL('drizzle/0001_missed_writing_day.sql',root),'utf8');db.exec(migration);db.exec(migration);
 const row=db.prepare('SELECT c.version,s.parent,s.payload FROM campaign c JOIN snapshots s ON s.id=c.head').get(),result=JSON.parse(row.payload);assert.equal(row.version,48);assert.equal(row.parent,'live');assert.equal(result.settings.capacityExceptions['2026-10-14'].draft,0);assert.deepEqual(result.videos,seed.videos);assert.equal(result.audit.at(-1).version,48);assert.equal(db.prepare('SELECT payload FROM snapshots WHERE id=?').get('live').payload,JSON.stringify(seed));db.close();
});
