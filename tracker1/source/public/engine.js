export const STAGES = ['drafted','scriptApproved','assigned','raw','usable','editing','cut','approved','scheduled','published'];
export const LABELS = {drafted:'Write script',scriptApproved:'Approve script',assigned:'Send to creator',raw:'Receive footage',usable:'Check footage',editing:'Send to editor',cut:'Receive first cut',approved:'Review & approve',scheduled:'Schedule post',published:'Publish & verify',revision:'Receive revision'};
export const GROUP = {drafted:'script',scriptApproved:'script',assigned:'script',raw:'creator',usable:'creator',editing:'edit',cut:'edit',revision:'edit',approved:'qa',scheduled:'publish',published:'publish'};
export function add(d,n=1){const x=new Date(d+'T12:00:00Z');x.setUTCDate(x.getUTCDate()+n);return x.toISOString().slice(0,10)}
export function weekday(d){return new Date(d+'T12:00:00Z').getUTCDay()}
export function days(a,b){return Math.round((new Date(b+'T12:00:00Z')-new Date(a+'T12:00:00Z'))/86400000)}
export function today(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())}
export function range(a,b){const out=[];for(let d=a;d<=b;d=add(d))out.push(d);return out}
export function monday(d){return add(d,-((weekday(d)+6)%7))}
const max=(...ds)=>ds.filter(Boolean).sort().at(-1);
export function lag(d,n,business=false){let x=d;for(let i=0;i<n;i++){x=add(x);while(business&&[0,6].includes(weekday(x)))x=add(x)}return x}
export function rule(s,v,d){return v.urgent?s.rules.urgent:(d<s.launch?s.rules.pre:s.rules.normal)}
export function owner(v,k){return v.owners?.[k]||({drafted:'Scriptwriter',scriptApproved:'Aryan',assigned:'Aryan',raw:'Creator '+v.creator,usable:'Aryan',editing:'Aryan',cut:'Editor',revision:'Editor',approved:'Aryan',scheduled:'Publisher',published:'Publisher'}[k])}
export function init(source){
 const settings={name:'Wave × Linkrunner',start:'2026-10-13',launch:'2026-10-22',end:'2026-12-05',launchInventory:18,reserveScripts:4,timezone:'Asia/Kolkata',rules:{pre:{raw:1,edit:1,revision:1,qa:0,business:false},normal:{raw:1,edit:1,revision:1,qa:0,business:true},urgent:{raw:1,edit:1,revision:1,qa:0,business:false}},capacity:{draftPre:4,draftNormal:3,creatorPre:3,creatorNormal:2,editorPre:6,editorNormal:5,qa:6,batch:6,weekendDraft:0,weekendCreator:1,weekendEditor:0},capacityExceptions:{'2026-11-17':{draft:4},'2026-11-18':{draft:4}},launchWeekendConfirmed:false};
 const drafts=source.flatMap(r=>Array(r.draft).fill(r.date));
 const videos=[];let di=0;
 for(const creator of ['A','B']){
  const assignments=source.flatMap(r=>Array(r.assign/2).fill(r.date));
  const raws=source.flatMap(r=>Array(r['raw'+creator]).fill(r.date));
  const slots=source.flatMap(r=>Array(r['pub'+creator]).fill(r.date));
  for(let i=0;i<50;i++)videos.push({id:`${creator}-${String(i+1).padStart(3,'0')}`,creator,page:'Page '+creator,format:creator==='A'?'Practical growth / operator':'Experiments / myths / stories',title:'',actual:{},revisions:[],owners:{},overrides:{},notes:'',blocker:'',urgent:false,quality:'pending',url:'',urlMissingReason:'',metrics:{},history:[],generation:1,rawLag:days(assignments[i],raws[i]),baseline:{assigned:assignments[i],raw:raws[i],usable:raws[i],editing:raws[i],cut:lag(raws[i],1,raws[i]>=settings.launch),published:slots[i]},slot:slots[i]});
 }
 videos.sort((a,b)=>a.baseline.assigned.localeCompare(b.baseline.assigned)||a.id.localeCompare(b.id));
 for(const v of videos){v.baseline.drafted=drafts[di++];v.baseline.scriptApproved=v.baseline.drafted;v.baseline.approved=v.baseline.cut;v.baseline.scheduled=v.baseline.cut;}
 const reserves=drafts.slice(100).map((d,i)=>({id:`ALT-${i+1}`,planned:d,title:'Alternative script '+(i+1),drafted:'',approved:''}));
 return {schema:1,version:0,settings,videos,reserves,setup:[{id:'brief',title:'Confirm product brief, claims, CTA and access',due:'2026-10-14',owner:'Aryan',done:false},{id:'people',title:'Confirm creators, editor, usage rights and page access',due:'2026-10-16',owner:'Aryan',done:false},{id:'sla',title:'Confirm launch weekend coverage and six-cut review capacity',due:'2026-10-16',owner:'Aryan',done:false}],audit:[]};
}
export function validPublished(v){return !!(v.actual.published&&v.actual.approved&&(v.url||v.urlMissingReason)&&v.quality==='usable'&&!v.revisions.some(r=>!r.returned))}
export function duplicate(source,name,start){
 const next=init(source),offset=days(next.settings.start,start);
 if(!/^\d{4}-\d{2}-\d{2}$/.test(start)||!Number.isFinite(offset))throw Error('Enter a valid setup date.');
 for(const k of ['start','launch','end'])next.settings[k]=add(next.settings[k],offset);
 next.settings.name=String(name||'New campaign').slice(0,100);
 next.settings.capacityExceptions=Object.fromEntries(Object.entries(next.settings.capacityExceptions).map(([d,c])=>[add(d,offset),c]));
 for(const v of next.videos){for(const k of STAGES)v.baseline[k]=add(v.baseline[k],offset);v.slot=add(v.slot,offset)}
 for(const r of next.reserves)r.planned=add(r.planned,offset);
 for(const x of next.setup)x.due=add(x.due,offset);
 return next;
}
export function current(v){if(validPublished(v))return 'complete';const r=v.revisions.at(-1);if(r&&!r.returned)return 'revision';return STAGES.find(k=>!v.actual[k])||'published'}
export function ready(v,k){if(v.blocker)return false;if(k==='revision')return !!v.revisions.at(-1)&&!v.revisions.at(-1).returned;const i=STAGES.indexOf(k);if(i<0)return false;if(i&& !v.actual[STAGES[i-1]])return false;if(k==='editing'&&v.quality!=='usable')return false;if(k==='approved'&&v.revisions.some(r=>!r.returned))return false;return !v.actual[k]}
export function deadline(state,v,k){
 const s=state.settings,a=v.actual,o=v.overrides||{},b=v.baseline,r=rule(s,v,a.assigned||b.assigned),rr=v.revisions.at(-1);
 if(o[k])return o[k];
 if(k==='drafted')return b.drafted;
 if(k==='scriptApproved')return max(deadline(state,v,'drafted'),a.drafted);
 if(k==='assigned')return max(b.assigned,a.scriptApproved||deadline(state,v,'scriptApproved'));
 if(k==='raw')return lag(a.assigned||deadline(state,v,'assigned'),Math.max(v.rawLag,r.raw),false);
 if(k==='usable')return a.raw||deadline(state,v,'raw');
 if(k==='editing')return max(a.usable||deadline(state,v,'usable'),a.raw);
 if(k==='cut'){const base=max(a.raw,a.usable,a.editing)||deadline(state,v,'editing');const re=rule(s,v,base);return lag(base,re.edit,re.business)}
 if(k==='revision')return rr?lag(rr.requested,rule(s,v,rr.requested).revision,rule(s,v,rr.requested).business):null;
 if(k==='approved'){const base=rr?(rr.returned||deadline(state,v,'revision')):(a.cut||deadline(state,v,'cut'));return lag(base,rule(s,v,base).qa,rule(s,v,base).business)}
 if(k==='scheduled')return a.approved||deadline(state,v,'approved');
 if(k==='published')return v.slot;
}
function cap(s,k,d,v){const pre=d<s.launch,w=[0,6].includes(weekday(d)),c=s.capacity;
 if(k==='drafted')return s.capacityExceptions?.[d]?.draft??(pre?c.draftPre:w?c.weekendDraft:c.draftNormal);
 if(k==='raw')return pre?c.creatorPre:w?c.weekendCreator:c.creatorNormal;
 if(k==='cut'||k==='revision')return pre?c.editorPre:w?c.weekendEditor:c.editorNormal;
 if(k==='scriptApproved'||k==='approved')return c.qa;
 if(k==='assigned')return c.batch;
 return 100;
}
export function forecast(state,asOf=today()){
 const s=state.settings,usage={},out={};
 const resource=(v,k)=>k==='raw'?'raw'+v.creator:(k==='revision'?'cut':k);
 function book(v,k,earliest){let d=earliest;for(let i=0;i<500;i++,d=add(d)){const key=resource(v,k)+d;if((usage[key]||0)<cap(s,k,d,v)){usage[key]=(usage[key]||0)+1;return d}}return null}
 // Reserve capacity consumed by recorded work on and after the forecast date.
 for(const v of state.videos)for(const k of STAGES){const d=v.actual[k];if(d&&d>=asOf){const key=resource(v,k)+d;usage[key]=(usage[key]||0)+1}}
 for(const v of state.videos)for(const r of v.revisions)if(r.returned&&r.returned>=asOf){const key='cut'+r.returned;usage[key]=(usage[key]||0)+1}
 for(const v of [...state.videos].sort((a,b)=>a.slot.localeCompare(b.slot)||a.id.localeCompare(b.id))){
  const p={};out[v.id]=p;let blocked=!!v.blocker||v.quality==='rejected';
  for(const k of STAGES){if(v.actual[k]){p[k]=v.actual[k];continue}if(blocked){p[k]=null;continue}
   const prev=STAGES[STAGES.indexOf(k)-1];let earliest=max(asOf,deadline(state,v,k),p[prev]);
   if(k==='raw'){const d=p.assigned;if(!d){blocked=true;p[k]=null;continue}earliest=max(earliest,lag(d,Math.max(v.rawLag,rule(s,v,d).raw)))}
   if(k==='cut'){const d=max(p.raw,p.usable,p.editing);earliest=max(earliest,lag(d,rule(s,v,d).edit,rule(s,v,d).business))}
   if(k==='approved'){const rr=v.revisions.at(-1);let d=p.cut;if(rr&&!rr.returned){d=book(v,'revision',max(asOf,deadline(state,v,'revision')));p.revision=d}else if(rr)d=rr.returned;if(!d){blocked=true;p[k]=null;continue}earliest=max(earliest,lag(d,rule(s,v,d).qa,rule(s,v,d).business))}
   p[k]=book(v,k,earliest);if(!p[k])blocked=true;
  }
 }
 return out;
}
export function tasks(state,asOf=today(),all=false){const f=forecast(state,asOf);return state.videos.flatMap(v=>(all?STAGES.concat(v.revisions.length?['revision']:[]):[current(v)]).filter(k=>k!=='complete').map(k=>{const due=deadline(state,v,k),original=v.baseline[k]||v.revisions.at(-1)?.requested,done=k==='revision'?v.revisions.at(-1)?.returned:v.actual[k];return {id:v.id,key:k,label:LABELS[k],owner:owner(v,k),due,original,forecast:f[v.id][k],done,ready:ready(v,k),status:done?'complete':v.blocker||v.quality==='rejected'?'blocked':due<asOf?'overdue':v.inProgress===k?'in progress':ready(v,k)?'ready':'waiting',shifted:due!==original,reason:v.overrides[k]?'Manual deadline override':due!==original?'Recalculated from upstream dates / turnaround rule':'Original plan',video:v}}))}
export function inventory(state,asOf=today()){return state.videos.filter(v=>v.actual.approved&&v.actual.approved<=asOf&&(!v.actual.published||v.actual.published>asOf)&&!v.revisions.some(r=>!r.returned)).length}
export function outlook(state,asOf=today()){
 const f=forecast(state,asOf),byPage={A:0,B:0},events=[],missed=[];
 // Assign each asset to its own fixed publication slot; no cross-page borrowing.
 for(const d of range(asOf,max(add(asOf,14),state.settings.end))){let stock=0;for(const v of state.videos){if(validPublished(v)&&v.actual.published<=d)continue;const approval=f[v.id].approved;if(approval&&approval<=d&&(v.slot>d||!f[v.id].published||f[v.id].published>d))stock++;if(v.slot===d&&(!approval||approval>d)){missed.push({date:d,id:v.id,page:v.page,ready:approval});byPage[v.creator]++}}
 events.push({date:d,inventory:stock,shortfall:missed.filter(m=>m.date===d).length});}
 const launchBy=add(state.settings.launch,-1),approvedLaunch=state.videos.filter(v=>v.actual.approved&&v.actual.approved<=launchBy).length,forecastLaunch=state.videos.filter(v=>f[v.id].approved&&f[v.id].approved<=launchBy).length;
 return {f,events,missed,byPage,approvedLaunch,forecastLaunch,launchShortfall:Math.max(0,state.settings.launchInventory-(asOf>launchBy?approvedLaunch:forecastLaunch)),endShortfall:state.videos.filter(v=>!validPublished(v)&&(!f[v.id].published||f[v.id].published>state.settings.end)).length};
}
export function validate(state,asOf=today()){
 const errors=[],s=state.settings,date=d=>/^\d{4}-\d{2}-\d{2}$/.test(d)&&!Number.isNaN(Date.parse(d))&&new Date(d+'T12:00Z').toISOString().slice(0,10)===d;
 if(!date(s.start)||!date(s.launch)||!date(s.end)||s.start>=s.launch||s.launch>s.end)errors.push('Campaign dates must be valid and ordered: setup < launch ≤ end.');
 if(state.schema!==1)errors.push('Unsupported backup schema.');
 if(state.videos.length!==100||['A','B'].some(c=>state.videos.filter(v=>v.creator===c).length!==50))errors.push('Exactly 100 delivery records are required: 50 per creator.');
 if(new Set(state.videos.map(v=>v.id)).size!==100)errors.push('Video IDs must be unique.');
 for(const [k,n] of Object.entries(s.capacity))if(!Number.isInteger(n)||n<0||n>100)errors.push('Invalid capacity: '+k);
 for(const [d,c] of Object.entries(s.capacityExceptions||{}))if(!date(d)||!Number.isInteger(c.draft)||c.draft<0||c.draft>100)errors.push('Invalid daily capacity exception.');
 for(const r of Object.values(s.rules))for(const k of ['raw','edit','revision','qa'])if(!Number.isInteger(r[k])||r[k]<0||r[k]>30)errors.push('Turnaround days must be 0–30.');
 if(s.capacity.draftPre<1||s.capacity.draftNormal<1||s.capacity.creatorPre<1||s.capacity.creatorNormal<1||s.capacity.editorPre<1||s.capacity.editorNormal<1||s.capacity.qa<1||s.capacity.batch<1)errors.push('Core daily capacities must be at least one.');
 if(!Number.isInteger(s.launchInventory)||s.launchInventory<0||s.launchInventory>100)errors.push('Launch inventory must be between 0 and 100.');
 const urls=new Set();
 for(const v of state.videos){
  if(v.page!=='Page '+v.creator)errors.push(v.id+': creator/page mismatch.');
  if(!Number.isInteger(v.rawLag)||v.rawLag<0||v.rawLag>30)errors.push(v.id+': invalid creator batch turnaround.');
  if(!['pending','rejected','usable'].includes(v.quality))errors.push(v.id+': invalid quality state.');
  for(const k of STAGES)if(!date(v.baseline[k]))errors.push(v.id+': invalid original plan date.');
  for(const k of Object.keys(v.actual))if(!STAGES.includes(k))errors.push(v.id+': unknown actual stage.');
  if(!date(v.slot)||v.slot<s.launch||v.slot>s.end)errors.push(v.id+': publishing slot is outside campaign dates.');
  let prev=s.start;
  for(const k of STAGES){const d=v.actual[k];if(!d)continue;if(!date(d)||d>asOf||d<s.start)errors.push(v.id+': invalid or future actual '+k);const idx=STAGES.indexOf(k);if(idx&&!v.actual[STAGES[idx-1]])errors.push(v.id+': missing prerequisite for '+k);if(d<prev)errors.push(v.id+': actual dates are out of order');prev=d;}
  if(v.actual.editing&&v.quality!=='usable')errors.push(v.id+': editing requires usable footage.');
  if(v.actual.usable&&v.quality!=='usable')errors.push(v.id+': footage check must be usable.');
  let last=v.actual.cut;
  for(const r of v.revisions){if(!date(r.requested)||!last||r.requested<last||r.requested>asOf)errors.push(v.id+': invalid revision request');if(r.returned&&(!date(r.returned)||r.returned<r.requested||r.returned>asOf))errors.push(v.id+': invalid revision receipt');last=r.returned;}
  if(v.actual.approved&&v.revisions.length&&(!last||v.actual.approved<last))errors.push(v.id+': revised cut must return before approval.');
  if(v.actual.published){if(!validPublished(v))errors.push(v.id+': publication needs final approval and URL or missing-URL explanation.');if(v.actual.published<s.launch||v.actual.published>s.end)errors.push(v.id+': actual publication outside campaign.');}
  if(v.url){if(!/^https?:\/\//i.test(v.url))errors.push(v.id+': enter a full http(s) URL.');const u=v.url.trim().replace(/\/$/,'');if(urls.has(u))errors.push('Duplicate published URL: '+v.id);urls.add(u);}
  for(const [k,d] of Object.entries(v.overrides)){if(!STAGES.includes(k)&&k!=='revision')errors.push('Unknown deadline');if(d&&(!date(d)||d<s.start))errors.push(v.id+': invalid deadline');}
  for(const n of Object.values(v.metrics))if(n!==''&&(!Number.isFinite(Number(n))||Number(n)<0))errors.push(v.id+': metrics must be nonnegative.');
 }
 for(const r of state.reserves){if(r.approved&&!r.drafted)errors.push('Alternative approval needs a draft');if(r.drafted&&(!date(r.drafted)||r.drafted>asOf))errors.push('Invalid alternative draft date');if(r.approved&&(!date(r.approved)||r.approved<r.drafted||r.approved>asOf))errors.push('Invalid alternative approval date')}
 return [...new Set(errors)];
}
export function applyAction(state,id,key,date,extra={}){
 const v=state.videos.find(v=>v.id===id);if(!v)throw Error('Video not found');
 v.inProgress='';
 if(key==='requestRevision'){
  if(!v.actual.cut||v.actual.published||v.revisions.some(r=>!r.returned))throw Error('Receive the cut first; resolve any open revision. Published work must be replaced.');
  delete v.actual.approved;delete v.actual.scheduled;v.revisions.push({requested:date,returned:'',note:extra.note||''});
 }else if(key==='replace'){
  v.history.push({generation:v.generation,actual:structuredClone(v.actual),actualDue:structuredClone(v.actualDue||{}),revisions:structuredClone(v.revisions),url:v.url,urlMissingReason:v.urlMissingReason,title:v.title,notes:v.notes,scriptUrl:v.scriptUrl,rawUrl:v.rawUrl,cutUrl:v.cutUrl,reason:extra.note,date});v.generation++;v.actual={};v.actualDue={};v.revisions=[];v.quality='pending';v.url='';v.urlMissingReason='';v.blocker='';v.scriptUrl='';v.rawUrl='';v.cutUrl='';v.metrics={};
 }else{
  if(!ready(v,key))throw Error('Complete the prerequisite and clear blockers first.');
  v.actualDue||={};v.actualDue[key]=deadline(state,v,key);
  if(key==='revision')v.revisions.at(-1).returned=date;
  else {v.actual[key]=date;if(key==='usable')v.quality='usable';if(key==='published'){v.url=extra.url||v.url;v.urlMissingReason=extra.urlMissingReason||v.urlMissingReason;}}
 }
}
export function weekly(state,start,asOf=today()){
 const end=add(start,6),inside=d=>d&&d>=start&&d<=end;
 return STAGES.map(k=>({key:k,label:LABELS[k],planned:state.videos.filter(v=>inside(v.baseline[k])).length+(k==='drafted'?state.reserves.filter(r=>inside(r.planned)).length:0),actual:state.videos.filter(v=>inside(v.actual[k])&&(k!=='published'||validPublished(v))&&(!(k==='drafted'||k==='scriptApproved')||!state.reserves.some(r=>r.usedBy===v.id))).length+(k==='drafted'?state.reserves.filter(r=>inside(r.drafted)).length:k==='scriptApproved'?state.reserves.filter(r=>inside(r.approved)).length:0)}));
}
