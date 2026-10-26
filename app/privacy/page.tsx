import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { CONTACT_EMAIL } from '@/lib/contact';
import { COMPANY, COMPANY_LINE } from '@/lib/company';

export const metadata: Metadata = { title: 'Privacy policy: Tile Labs', description: `How ${COMPANY.legal} handles personal information as a company.` };

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy">
      <p>{COMPANY.legal}, doing business as {COMPANY.trading}, is a software company in {COMPANY.place}. This page says what we do with personal information as a company: when you visit this site, when you write to us, and when we build or run software for a client.</p>

      <h2>Who we are</h2>
      <p>{COMPANY_LINE} (company number {COMPANY.uen}, {COMPANY.place}). We make software products, white-label versions that wear a client’s brand, and custom software built to a client’s specification.</p>

      <h2>This website</h2>
      <p>This site sets no cookies, has no analytics and loads no outside scripts or fonts. It collects nothing about you. The form under “Talk to us” opens your own email app with what you typed; nothing is sent from the page itself.</p>

      <h2>If you write to us</h2>
      <p>When you email us we receive your email address and what you wrote. We use them to answer you, and keep the conversation for as long as we need it to do that. Our address is <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>

      <h2>Our products</h2>
      <p>The products we sell under the Snow AI name are owned and run by {COMPANY.legal}. What those apps collect, and why, is in their own privacy policy at <a href="https://snowai.app/privacy">snowai.app/privacy</a>. A product sold under another name has its own notice.</p>

      <h2>Software we build for clients</h2>
      <p>A client decides what its own app holds and why. We handle that information only to build and run the software for the client, under our agreement with them. The privacy notice a client’s users read is the client’s. If you use a client’s app and have a question about your information, ask the client first; if you write to us, we will pass it on to them.</p>

      <h2>Your choices</h2>
      <p>You can ask us what we hold about you, to correct it, or to delete it. Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>

      <h2>Changes</h2>
      <p>If this policy changes, the date at the top changes with it.</p>
    </LegalPage>
  );
}
