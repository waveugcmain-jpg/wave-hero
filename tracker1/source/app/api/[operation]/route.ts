import { readState,mutate } from '../../../lib/campaign-store';
import { env } from 'cloudflare:workers';
import { hasSession,passwordMatches,createSession,sessionCookie,clearSessionCookie } from '../../../lib/password-auth.mjs';
export const dynamic='force-dynamic';
const json=(data:unknown,status=200,extra:Record<string,string>={})=>Response.json(data,{status,headers:{'Cache-Control':'no-store',...extra}});
const authenticated=(request:Request)=>hasSession(request.headers.get('cookie'),env.TRACKER_SESSION_SECRET,env.TRACKER_PASSWORD);
export async function GET(request:Request){
 if(new URL(request.url).pathname!=='/api/state')return json({error:'Not found'},404);
 if(!await authenticated(request))return json({error:'Enter the team password to open the tracker.'},401);
 try{return json({...await readState(),access:{canEdit:true,signedIn:true}})}catch(error){return json({error:(error as Error).message},500)}
}
export async function POST(request:Request){
 const url=new URL(request.url),operation=url.pathname.split('/').at(-1)||'',secure=url.protocol==='https:';
 const origin=request.headers.get('origin');if(origin&&origin!==url.origin)return json({error:'Cross-origin writes are not allowed.'},403);
 if(operation==='logout')return json({ok:true},200,{'Set-Cookie':clearSessionCookie(secure)});
 if(operation==='login'){
  try{
   if(!env.TRACKER_PASSWORD||!env.TRACKER_SESSION_SECRET)return json({error:'Password access is not configured.'},503);
   const raw=await request.text();if(raw.length>2000)return json({error:'Request too large.'},413);
   const ip=request.headers.get('cf-connecting-ip')||'unknown';
   const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(ip));const attemptKey=Array.from(new Uint8Array(digest)).map(x=>x.toString(16).padStart(2,'0')).join('');
   const window=Math.floor(Date.now()/900000),attempt=await env.DB!.prepare('INSERT INTO login_attempts(id,window,attempts) VALUES(?,?,1) ON CONFLICT(id) DO UPDATE SET attempts=CASE WHEN window=excluded.window THEN attempts+1 ELSE 1 END,window=excluded.window RETURNING attempts').bind(attemptKey,window).first<{attempts:number}>();
   if(!attempt||attempt.attempts>10)return json({error:'Too many attempts. Try again in 15 minutes.'},429,{'Retry-After':'900'});
   if(!await passwordMatches(JSON.parse(raw).password,env.TRACKER_PASSWORD))return json({error:'Incorrect password. Try again.'},401);
   const token=await createSession(env.TRACKER_SESSION_SECRET,env.TRACKER_PASSWORD);
   await env.DB!.prepare('DELETE FROM login_attempts WHERE id=?').bind(attemptKey).run();
   return json({ok:true},200,{'Set-Cookie':sessionCookie(token,secure)});
  }catch{return json({error:'Could not sign in. Please try again.'},400)}
 }
 if(!await authenticated(request))return json({error:'Your session expired. Enter the team password again.'},401);
 if(!['save','import','undo','reset','duplicate'].includes(operation))return json({error:'Not found'},404);
 try{
  const raw=await request.text();if(raw.length>2000000)return json({error:'Campaign update too large.'},413);
  const body=JSON.parse(raw);if(body.state)delete body.state.access;
  const result=await mutate(operation,body,'Team password session');return json(result.data,result.status);
 }catch(error){return json({error:(error as Error).message},400)}
}
