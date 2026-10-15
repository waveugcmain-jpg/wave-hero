export const SESSION_COOKIE='wave_tracker_session';
export const SESSION_SECONDS=7*24*60*60;
const enc=new TextEncoder();
const b64=bytes=>btoa(String.fromCharCode(...bytes)).replaceAll('+','-').replaceAll('/','_').replaceAll('=','');
const unb64=s=>Uint8Array.from(atob(s.replaceAll('-','+').replaceAll('_','/')),c=>c.charCodeAt(0));
async function key(secret,password){if(!secret||secret.length<32||!password)throw Error('Password access is not configured.');return crypto.subtle.importKey('raw',enc.encode(secret+':'+password),{name:'HMAC',hash:'SHA-256'},false,['sign','verify'])}
export async function passwordMatches(input,password){
 if(typeof input!=='string'||!password||input.length>256)return false;
 const [a,b]=await Promise.all([crypto.subtle.digest('SHA-256',enc.encode(input)),crypto.subtle.digest('SHA-256',enc.encode(password))]);
 const x=new Uint8Array(a),y=new Uint8Array(b);let difference=0;for(let i=0;i<x.length;i++)difference|=x[i]^y[i];return difference===0;
}
export async function createSession(secret,password,now=Date.now()){
 const payload=b64(enc.encode(JSON.stringify({expires:now+SESSION_SECONDS*1000,nonce:b64(crypto.getRandomValues(new Uint8Array(24)))})));
 return payload+'.'+b64(new Uint8Array(await crypto.subtle.sign('HMAC',await key(secret,password),enc.encode(payload))));
}
export async function hasSession(cookie,secret,password,now=Date.now()){
 try{const value=String(cookie||'').split(';').map(x=>x.trim()).find(x=>x.startsWith(SESSION_COOKIE+'='))?.slice(SESSION_COOKIE.length+1);if(!value||value.length>1000)return false;
 const [payload,signature,extra]=value.split('.');if(extra||!payload||!signature)return false;
 if(!await crypto.subtle.verify('HMAC',await key(secret,password),unb64(signature),enc.encode(payload)))return false;
 const data=JSON.parse(new TextDecoder().decode(unb64(payload)));return typeof data.expires==='number'&&data.expires>now&&data.expires<=now+SESSION_SECONDS*1000&&typeof data.nonce==='string';
 }catch{return false}
}
export function sessionCookie(token,secure=true){return `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_SECONDS}${secure?'; Secure':''}`}
export function clearSessionCookie(secure=true){return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure?'; Secure':''}`}
