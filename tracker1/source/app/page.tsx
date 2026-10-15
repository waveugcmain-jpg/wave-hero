import { headers } from 'next/headers';
import { env } from 'cloudflare:workers';
import { hasSession } from '../lib/password-auth.mjs';
export const dynamic = 'force-dynamic';
export default async function Page() {
 const requestHeaders=await headers();
 if(!await hasSession(requestHeaders.get('cookie'),env.TRACKER_SESSION_SECRET,env.TRACKER_PASSWORD))return <><link rel="stylesheet" href="/style.css"/><main className="password-screen"><form id="password-form" className="password-card"><div className="brand">wave<span>·</span></div><h1>Production tracker</h1><p>Enter the team password to view and update the campaign.</p><label htmlFor="tracker-password">Password</label><input id="tracker-password" name="password" type="password" autoComplete="current-password" required autoFocus/><p id="password-error" role="alert"/><button className="primary" type="submit">Open tracker</button></form></main><script type="module" src="/password.js"/></>;
 return <><link rel="stylesheet" href="/style.css"/><div id="app"><p className="loading">Loading campaign…</p></div><dialog id="detail"/><div id="toast" role="status" aria-live="polite"/><script type="module" src="/app.js"/></>;
}
