# Wave Production Control Centre

A private ChatGPT Site for Wave × Linkrunner: 100 valid publications, 50 per page, 22 October–5 December 2026, with 18 approved assets targeted by 21 October.

## Run locally

Use Node 22.13 or later. Run npm install, npm run build, then apply the generated SQL migration to local D1 with Wrangler before npm run dev. The Sites starter supplies local-only mock sign-in. Production requires ChatGPT authentication and the private Site access gate.

## Storage and scheduling

The vanilla browser interface calls authenticated API routes in Vinext. Cloudflare D1 stores immutable campaign snapshots and an optimistic versioned head. Stale saves are rejected; Undo restores earlier saved input. Recalculation runs in public/engine.js. Original baselines are preserved separately from actuals and deadline overrides. lib/initial-campaign.json preserves the existing local campaign when an empty online database first starts. Subsequent deployments never overwrite stored data.

Today, calendar, weekly operations, production board and performance all use the same per-video records. Forecasts are estimates based on editable capacities and turnaround rules. Only approved final assets enter inventory. Only valid publications count toward the 100-video target. Posts are recorded manually; the app does not publish to Instagram.

## Validate

Run npm test for dependency, partial-delivery, revision, inventory, publication, correction and storage/concurrent-save tests. Run npm run build for the production build. D1 migrations are in drizzle/ and included by Sites packaging.

## Access and backups

Published owner-private by default. Team members require Site access before they can use this shared campaign. Export downloads CSV and JSON backups; import, reset and duplicate are available in Settings. There is no separate role-based editor/admin permission system within this private app.

## Daily workflow update (15 October)
Calendar opens in week view with current next actions above it. The board uses direct action labels, owners, planned/recovery dates and publication slots. Reports and alternatives are available in Settings. Writing capacity can be changed for any date; zero means no writing. Actuals are recorded separately.

Migration 0001 records the owner-requested zero writing capacity on 14 October for the original campaign. It creates an undo snapshot and preserves all actuals and original dates. It does not apply to differently dated campaigns. With the initial actuals, four scripts are allocated to 15 October and four to 16 October, including the missed work, without increasing daily capacity or moving publication slots.
