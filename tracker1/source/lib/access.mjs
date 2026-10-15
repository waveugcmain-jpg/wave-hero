export function canEditCampaign(user, editorEmails) {
 if(!user?.email||!editorEmails)return false;
 return String(editorEmails).split(',').map(x=>x.trim().toLowerCase()).filter(Boolean).includes(user.email.toLowerCase());
}
