import {STAGES,LABELS,deadline} from './engine.js';
const fmt=d=>new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',timeZone:'UTC'}).format(new Date(d+'T12:00Z'));
const names={drafted:'Script writing',scriptApproved:'Script approval',assigned:'Sending the script to the creator',raw:'Raw footage',usable:'Footage check',editing:'Sending footage to the editor',cut:'First cut',approved:'Final approval',scheduled:'Post scheduling'};
export function scheduleChange(state,t,schedule,asOf){
 const v=t.video,k=t.key,to=t.done||t.forecast,from=t.original;
 if(!to||!from||to===from)return null;
 let reason;
 if(t.done)reason='Completed '+fmt(to)+'; originally planned '+fmt(from);
 else if(v.overrides?.[k])reason='Deadline changed manually to '+fmt(v.overrides[k]);
 else if(to<from)reason='Can be completed earlier with the current plan';
 else if(k==='drafted'){
  reason=state.settings.capacityExceptions?.[from]?.draft===0?'No script writing on '+fmt(from):from<asOf?'Script still not recorded as written':'Earlier scripts use the available writing time';
 }else{
  const preceding=STAGES.slice(0,STAGES.indexOf(k)).reverse();
  const delayed=preceding.find(p=>(v.actual[p]||schedule[p])&&v.baseline[p]&&(v.actual[p]||schedule[p])>v.baseline[p]);
  if(delayed){const when=v.actual[delayed]||schedule[delayed];reason=names[delayed]+' '+(v.actual[delayed]?'completed ':'expected ')+fmt(when)+' instead of '+fmt(v.baseline[delayed]);}
  else if(k==='revision')reason='Revision requested '+fmt(v.revisions.at(-1)?.requested||from)+'; editor turnaround and workload apply';
  else if(to>deadline(state,v,k))reason=(['cut','revision'].includes(k)?'Editor':k==='raw'?'Creator '+v.creator:k==='approved'||k==='scriptApproved'?'Reviewer':'Daily')+' capacity is full before '+fmt(to);
  else reason='Current turnaround rule requires completion on '+fmt(to);
 }
 return {from,to,reason,label:LABELS[k]};
}
export function groupScheduleChanges(state,items,asOf,all=items){
 const groups=new Map();
 for(const t of items){const schedule=Object.fromEntries(all.filter(x=>x.id===t.id).map(x=>[x.key,x.done||x.forecast]));const change=scheduleChange(state,t,schedule,asOf);if(!change)continue;const key=JSON.stringify(change);if(!groups.has(key))groups.set(key,{...change,count:0,ids:[]});const g=groups.get(key);g.count++;g.ids.push(t.id);}
 return [...groups.values()];
}
