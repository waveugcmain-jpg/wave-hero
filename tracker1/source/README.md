# Wave Production Control Centre

Dependency-aware calendar and per-video production board for Wave × Linkrunner: 100 publications, 50 per page, 22 October–5 December 2026, with 18 approved assets targeted by 21 October.

## Password access

The page and every data/save API require a valid password session. The shared team password permits viewing and editing. Runtime secrets TRACKER_PASSWORD and TRACKER_SESSION_SECRET are configured in Sites, never in source or hosting.json. Use a random session signing secret with at least 32 characters. Cookies are signed, HttpOnly, Secure in production, SameSite=Lax and valid for seven days. Password rotation invalidates earlier sessions. Lock tracker clears the device's cookie. Login attempts are limited in D1. ChatGPT sign-in is not required when the outer Site audience allows visitors. This supersedes earlier owner-only/public-read modes.

## Data storage

Authenticated changes save to Cloudflare D1 as campaign snapshots with optimistic version checks. Stale writes are rejected. Undo restores earlier saved data. Refresh, locking and signing in again do not reset the campaign. Deployments preserve the existing database. Only an empty database starts from lib/initial-campaign.json. File URLs and metadata are saved with each video; file binaries remain at their linked storage location.

## Run and verify

Use Node 22.13 or later, npm ci, then npm test and npm run build. Apply drizzle SQL migrations to local D1 before npm run dev. Set local-only password/signing values through the starter's local environment support. Production migrations are included by Sites packaging. Twenty-six tests cover production dependencies, late and partial deliveries, revisions, exact publication reconciliation, password/session protection, durable saves and concurrent updates.

## Daily use

Open the calendar to see today's next actions and the week. Enter actual completions, receive files, review edits and record verified publications. Change writing capacity to reschedule unfinished work. The board shows each video's next action, owner, working date and publication slot. Reports, backup/import/reset and alternative scripts are in Settings. Forecasts are estimates; original plan dates and recorded actuals remain distinct. Publishing to Instagram is recorded manually.
