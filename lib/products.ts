/* The fifteen products on the wall, and what each one shows when its tile is pressed.
   Everything here is a drawn example: invented names, no prices, no figures of our own (the approved mock-up,
   26 October 2026). A product with a `video` plays that file from /public (mp4 with a webm beside it) in place of the
   click-through; the others keep their three-step click-through until their videos are made. */

export type Row = [label: string, pill: string, tone?: 'hot' | 'ok'];
export type Frame =
  | { k: 'list'; t: string; rows: Row[]; act: string; cap: string }
  | { k: 'checks'; t: string; items: string[]; done: number; act: string; cap: string }
  | { k: 'bars'; t: string; vals: number[]; act: string; cap: string }
  | { k: 'chat'; t: string; msgs: [text: string, mine: 0 | 1][]; act: string; cap: string }
  | { k: 'form'; t: string; fields: [label: string, value: string][]; act: string; cap: string }
  | { k: 'sign'; t: string; state: 'ask' | 'done'; act: string; cap: string }
  | { k: 'wave'; t: string; act: string; cap: string }
  | { k: 'paid'; t: string; act: string; cap: string };

export type Product = {
  n: string;
  tag: string;
  what: string;
  who: string;
  addr: string;
  video?: string;
  fr: Frame[];
};

const L = (t: string, rows: Row[], act: string, cap: string): Frame => ({ k: 'list', t, rows, act, cap });
const C = (t: string, items: string[], done: number, act: string, cap: string): Frame => ({ k: 'checks', t, items, done, act, cap });
const B = (t: string, vals: number[], act: string, cap: string): Frame => ({ k: 'bars', t, vals, act, cap });
const M = (t: string, msgs: [string, 0 | 1][], act: string, cap: string): Frame => ({ k: 'chat', t, msgs, act, cap });
const F = (t: string, fields: [string, string][], act: string, cap: string): Frame => ({ k: 'form', t, fields, act, cap });
const S = (t: string, state: 'ask' | 'done', act: string, cap: string): Frame => ({ k: 'sign', t, state, act, cap });
const V = (t: string, act: string, cap: string): Frame => ({ k: 'wave', t, act, cap });
const P = (t: string, act: string, cap: string): Frame => ({ k: 'paid', t, act, cap });

export const PRODUCTS: Product[] = [
  { n: 'Today', tag: 'For shops', what: 'A short list each morning for a shop: what to mark down, what to reorder, and who has stopped coming.', who: 'Grocery stores, pizza shops, any shop with stock that goes off.', addr: 'today.example', fr: [
    L('Stock this morning', [['Whole milk', 'Expires soon', 'hot'], ['Sourdough', 'Fine'], ['Bananas', 'Reorder']], 'Mark down the milk', 'The day’s list, worked out from what is on the shelf.'),
    L('Stock this morning', [['Whole milk', 'Marked down', 'ok'], ['Sourdough', 'Fine'], ['Bananas', 'Reorder', 'hot']], 'Approve the reorder', 'Each suggestion says why it is there, and waits for your yes.'),
    C('Done for today', ['Milk marked down', 'Reorder drafted', 'A special ready to approve'], 3, '', 'Nothing changes at the till, or goes out, without your yes.')] },
  { n: 'Engage', tag: 'Marketing', what: 'Messages to the right customers at the right time, written once and personal to each.', who: 'Any business that talks to its customers.', addr: 'engage.example', fr: [
    F('New message', [['To', 'Regulars'], ['Say', 'Thank you for coming back, {first name}.']], 'Preview it', 'Pick a group, say it once.'),
    M('What Sam sees', [['Thank you for coming back, Sam.', 0], ['Here is a little something for you.', 0]], 'Approve and send', 'Every message is made personal, and you approve it first.'),
    B('Replies this week', [40, 65, 52, 88, 70], '', 'You see who answered, and what worked.')] },
  { n: 'Sign', video: 'sign-demo', tag: 'Signatures', what: 'Send a document to be signed by someone outside your account, and keep what was said.', who: 'Agencies, firms and anyone who needs a signature.', addr: 'sign.example', fr: [
    S('Service agreement', 'ask', 'Sign here', 'The signer opens a link. No account needed.'),
    S('Service agreement', 'done', 'Send it back', 'Draw it, type it or upload it.'),
    C('Signed and filed', ['Signed by Sam', 'Copy kept with the record', 'Sent back to you'], 3, '', 'Who saw what, and when, is kept.')] },
  { n: 'Documents', tag: 'Files', what: 'One place for every document, filed in the right folder, with every version kept.', who: 'Anyone who loses time looking for a file.', addr: 'documents.example', fr: [
    L('Folders', [['Contracts', 'Open'], ['Forms', 'Open'], ['Receipts', 'Open']], 'Drop in a file', 'Every document has a folder.'),
    L('Folders', [['Lease.pdf', 'Filed in Contracts', 'ok'], ['Forms', 'Open'], ['Receipts', 'Open']], 'Share it', 'It reads the file and files it where it belongs.'),
    C('Shared by link', ['Link made', 'Ends on Friday', 'Opened once'], 3, '', 'Every opening is logged.')] },
  { n: 'Portal', tag: 'For clients', what: 'A client’s own place for their documents, their to-dos and what you send them.', who: 'Agencies and firms with clients to look after.', addr: 'portal.example', fr: [
    C('Your to-do', ['Upload your ID', 'Sign the form', 'Book a time'], 0, 'Upload my ID', 'The client sees what is asked of them, nothing else.'),
    C('Your to-do', ['Upload your ID', 'Sign the form', 'Book a time'], 1, 'Sign the form', 'Each step ticks itself off.'),
    C('Your to-do', ['Upload your ID', 'Sign the form', 'Book a time'], 3, '', 'You see it finish, with nobody chasing.')] },
  { n: 'Tax', tag: 'Returns', what: 'Work out a tax return, and see what changes if you do something different.', who: 'Preparers and the people they prepare for.', addr: 'tax.example', fr: [
    L('Your year', [['Income', 'Entered'], ['Spending', 'Entered'], ['Retirement saving', 'Add', 'hot']], 'Add retirement saving', 'You enter your year once.'),
    B('Tax owed, each way', [88, 61], 'Keep this one', 'See the difference before you decide.'),
    C('Ready for your preparer', ['Figures checked', 'Forms filled', 'A note on what changed'], 3, '', 'General information, not tax advice.')] },
  { n: 'CRM', tag: 'People', what: 'Everyone you work with in one list, with what was said and what to do next.', who: 'Anyone who sells or looks after clients.', addr: 'crm.example', fr: [
    L('People', [['Sam Rivera', 'Follow up', 'hot'], ['Alex Chen', 'New'], ['Dana Wu', 'Quote sent']], 'Follow up Sam', 'Who needs you today, at the top.'),
    M('Call with Sam', [['Sam would like a quote by Friday.', 0], ['Noted. I will send it Thursday.', 1]], 'Save the note', 'Notes stay with the person.'),
    C('Next steps', ['Send the quote', 'Call on Friday', 'Reminder set'], 3, '', 'Nothing is left to memory.')] },
  { n: 'Invoice', tag: 'Billing', what: 'Make an invoice, send it, and see who has paid and who has not.', who: 'Small businesses and the people who keep their books.', addr: 'invoice.example', fr: [
    L('Invoice for Sam', [['Setup', 'Added'], ['Monthly', 'Added'], ['Total', 'Ready', 'hot']], 'Send the invoice', 'Lines in, invoice out.'),
    P('Invoice for Sam', 'Mark as paid', 'The customer pays by the link.'),
    L('This month', [['Sam Rivera', 'Paid', 'ok'], ['Dana Wu', 'Open'], ['Alex Chen', 'Overdue', 'hot']], '', 'Who has paid, and who needs a nudge.')] },
  { n: 'Voice', tag: 'Calls', what: 'Record a call, get the words written down, and a short summary with what to do next.', who: 'Agents, advisers and anyone who takes calls.', addr: 'voice.example', fr: [
    V('Recording a call', 'Stop recording', 'Both sides are told apart.'),
    M('Transcript', [['Hello, I would like to renew.', 0], ['Of course. Let me find your file.', 1]], 'Summarise', 'The words, written as they were said.'),
    C('Next steps', ['Send the renewal form', 'Call back on Tuesday', 'Add a note to the file'], 3, '', 'The summary lands on the person’s record.')] },
  { n: 'Webinar', tag: 'Talks', what: 'Run a live or recorded talk, get people to turn up, and see who stayed.', who: 'Anyone who teaches, sells or explains by talking.', addr: 'webinar.example', fr: [
    F('Join the talk', [['Name', 'Sam Rivera'], ['Email', 'sam@example.com']], 'Register', 'One page, two questions.'),
    C('You are in', ['Registered', 'Reminder on the way', 'Link ready'], 3, 'Join the talk', 'Reminders get people to turn up.'),
    B('Who stayed', [95, 80, 62, 55, 48], '', 'Not who registered: who stayed, minute by minute.')] },
  { n: 'Forms', tag: 'Surveys', what: 'Build a form or a survey, share a link, and read the answers in a table.', who: 'Any business that asks its customers something.', addr: 'forms.example', fr: [
    F('New survey', [['Question', 'How did we do?'], ['Answer', '1 to 5 stars']], 'Share the link', 'Nine kinds of question.'),
    B('Answers so far', [20, 35, 60, 80, 55], 'Open the table', 'They arrive as people answer.'),
    C('Answers ready', ['Read in a table', 'Saved as a file', 'Points sent to those who earned them'], 3, '', 'Answers belong to you alone.')] },
  { n: 'Rewards', tag: 'Points', what: 'Customers earn points for answering and coming back, and spend them on something real.', who: 'Businesses that want customers to keep coming back.', addr: 'rewards.example', fr: [
    L('Your points', [['Answered a survey', 'Earned', 'ok'], ['Left a review', 'Earned', 'ok'], ['Came back', 'Earned', 'ok']], 'Spend my points', 'Each thing they do earns points.'),
    L('Choose a reward', [['A free consultation', 'Choose', 'hot'], ['A gift card', 'Choose'], ['A credit', 'Choose']], 'Choose the consultation', 'Spent on a reward you set.'),
    C('Reward on its way', ['Points spent', 'Consultation booked', 'Thank you sent'], 3, '', 'Each business pays for its own rewards.')] },
  { n: 'Pitch', tag: 'Coaching', what: 'Practise what to say when a client pushes back, and get answers you can use.', who: 'Anyone learning to sell, and the people who teach them.', addr: 'pitch.example', fr: [
    M('A client says', [['It costs too much.', 0]], 'Get answers', 'Describe the objection.'),
    L('Three ways to answer', [['Ask what they compared it to', 'Try'], ['Show what they would lose', 'Try'], ['Offer a smaller start', 'Try', 'hot']], 'Practise one', 'Each answer says why it works.'),
    B('Your practice', [35, 52, 70, 88], '', 'Practice is scored, and it shows.')] },
  { n: 'Model', tag: 'What if', what: 'Lay out a person’s numbers and see what changes if they choose differently.', who: 'Advisers, preparers and anyone planning ahead.', addr: 'model.example', fr: [
    B('Tax and cost, today', [90, 55, 70], 'What if they save more?', 'The starting picture.'),
    B('Tax and cost, with a change', [62, 55, 70], 'Compare them', 'Change one lever, see the rest move.'),
    L('The better choice', [['Today', 'Keep'], ['Save more', 'Best', 'ok'], ['Wait a year', 'Compare']], '', 'The comparison says which keeps the most.')] },
  { n: 'Recovery', tag: 'Collections', what: 'Look after overdue accounts within the rules, with plain notices and a plan people can follow.', who: 'Collection agencies and the businesses they work for.', addr: 'recovery.example', fr: [
    L('Accounts', [['Account 1042', 'Follow up', 'hot'], ['Account 1043', 'Plan agreed'], ['Account 1044', 'Disputed']], 'Send a plain notice', 'The rules are checked before anything goes.'),
    M('Notice', [['This is an attempt to collect a debt. You can dispute it.', 0]], 'Approve', 'Plain words, and the required line is kept.'),
    C('Rules checked', ['Contact hours kept', 'Stop request respected', 'Notice in plain words'], 3, '', 'What the software can stop, it stops.')] }
];
