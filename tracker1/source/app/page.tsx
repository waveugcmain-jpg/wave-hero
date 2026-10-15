import { requireChatGPTUser } from './chatgpt-auth';
export const dynamic = 'force-dynamic';
export default async function Page() {
 await requireChatGPTUser('/');
 return <><link rel="stylesheet" href="/style.css"/><div id="app"><p className="loading">Loading campaign…</p></div><dialog id="detail"/><div id="toast" role="status" aria-live="polite"/><script type="module" src="/app.js"/></>;
}
