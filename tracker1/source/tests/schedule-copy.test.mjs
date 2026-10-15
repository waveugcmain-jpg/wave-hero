import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {init,tasks,forecast,applyAction,deadline} from '../public/engine.js';
import {scheduleChange,groupScheduleChanges} from '../public/schedule-copy.js';
const source=JSON.parse(await fs.readFile(new URL('../public/source-plan.json',import.meta.url)));
test('Calendar identifies exactly two carried scripts and explains dependent approvals',()=>{
 const s=init(source);s.settings.capacityExceptions['2026-10-14']={draft:0};const all=tasks(s,'2026-10-15',true),f=forecast(s,'2026-10-15'),items=all.filter(t=>t.key==='drafted'&&t.forecast==='2026-10-15');const changes=groupScheduleChanges(s,items,'2026-10-15',all);assert.equal(changes.length,1);assert.equal(changes[0].count,2);assert.equal(changes[0].from,'2026-10-14');assert.equal(changes[0].to,'2026-10-15');assert.equal(changes[0].reason,'No script writing on 14 Oct');const t=all.find(t=>t.id==='A-001'&&t.key==='scriptApproved');assert.match(scheduleChange(s,t,f[t.id],'2026-10-15').reason,/Script writing expected 15 Oct instead of 14 Oct/);assert.equal(scheduleChange(s,items.find(t=>t.id==='B-001'),f['B-001'],'2026-10-15'),null);
});
test('Actual late receipt, manually changed dates and early completion get different explanations',()=>{
 const s=init(source),v=s.videos.find(v=>v.id==='A-001');for(const k of ['drafted','scriptApproved','assigned','raw','usable','editing'])applyAction(s,v.id,k,k==='raw'||k==='usable'||k==='editing'?'2026-10-18':v.baseline[k]);let f=forecast(s,'2026-10-18'),t=tasks(s,'2026-10-18',true).find(t=>t.id===v.id&&t.key==='cut');assert.match(scheduleChange(s,t,f[v.id],'2026-10-18').reason,/completed 18 Oct instead of 17 Oct/);v.overrides.cut='2026-10-20';f=forecast(s,'2026-10-18');t={...t,forecast:f[v.id].cut};assert.equal(scheduleChange(s,t,f[v.id],'2026-10-18').reason,'Deadline changed manually to 20 Oct');assert.equal(scheduleChange(s,{...t,done:'2026-10-17'},f[v.id],'2026-10-18').reason,'Completed 17 Oct; originally planned 18 Oct');
});
