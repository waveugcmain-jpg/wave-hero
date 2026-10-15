-- Preserve the user's current campaign and its undo history. Only the missed day's writing capacity changes.
INSERT OR IGNORE INTO snapshots(id,parent,payload,created_at)
SELECT 'schedule-correction-2026-10-14', c.head,
 json_set(s.payload, '$.settings.capacityExceptions."2026-10-14"', json('{"draft":0}'), '$.version', c.version+1,
 '$.audit', json_insert(json_extract(s.payload,'$.audit'),'$[#]',json_object('at','2026-10-15T00:00:00Z','version',c.version+1,'actor','Campaign owner request','description','14 October: no scripts written. Writing capacity set to 0; unfinished scripts carry forward within daily capacity. Actuals and original dates preserved.'))),
 '2026-10-15T00:00:00Z'
FROM campaign c JOIN snapshots s ON s.id=c.head
WHERE c.id='main' AND json_extract(s.payload,'$.settings.start')='2026-10-13';
--> statement-breakpoint
UPDATE campaign SET head='schedule-correction-2026-10-14',version=version+1
WHERE id='main' AND head=(SELECT parent FROM snapshots WHERE id='schedule-correction-2026-10-14');
