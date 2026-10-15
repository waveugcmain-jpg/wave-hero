import type { Metadata } from 'next';
export const metadata:Metadata={title:'Wave Production Control Centre',description:'Daily tasks, video approvals and publishing progress for Wave × Linkrunner.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
