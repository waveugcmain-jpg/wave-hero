import { getChatGPTUser } from '../../chatgpt-auth';
import { readState,mutate } from '../../../lib/campaign-store';
export const dynamic='force-dynamic';
const json=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
export async function GET(request:Request){
 const user=await getChatGPTUser();if(!user)return json({error:'Sign in to open your campaign.'},401);
 if(new URL(request.url).pathname!=='/api/state')return json({error:'Not found'},404);
 try{return json(await readState())}catch(error){return json({error:(error as Error).message},500)}
}
export async function POST(request:Request){
 const user=await getChatGPTUser();if(!user)return json({error:'Sign in before saving.'},401);
 const origin=request.headers.get('origin');if(origin&&origin!==new URL(request.url).origin)return json({error:'Cross-origin writes are not allowed.'},403);
 const operation=new URL(request.url).pathname.split('/').at(-1)||'';
 if(!['save','import','undo','reset','duplicate'].includes(operation))return json({error:'Not found'},404);
 try{
  const raw=await request.text();if(raw.length>2000000)return json({error:'Campaign update too large.'},413);
  const result=await mutate(operation,JSON.parse(raw),user.userId);return json(result.data,result.status);
 }catch(error){return json({error:(error as Error).message},400)}
}
