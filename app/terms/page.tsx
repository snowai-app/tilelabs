import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { CONTACT_EMAIL } from '@/lib/contact';
import { COMPANY, COMPANY_LINE } from '@/lib/company';

export const metadata: Metadata = { title: 'Terms: Tile Labs', description: `The terms for this website, from ${COMPANY.legal}.` };

export default function Terms() {
  return (
    <LegalPage title="Terms">
      <p>These terms cover this website, tilelabs.si. It belongs to {COMPANY_LINE} (company number {COMPANY.uen}, {COMPANY.place}). Using the site means agreeing to them.</p>

      <h2>This website</h2>
      <p>The site tells you what we make and how to reach us. It is information, not an offer, and it is provided as it is. The examples on it are drawn with invented names and are examples only.</p>

      <h2>Our products</h2>
      <p>Each product has its own terms, which apply when you use it. The terms for the Snow AI family of apps are at <a href="https://snowai.app/terms">snowai.app/terms</a>.</p>

      <h2>Work for clients</h2>
      <p>White-label versions and custom software are made under a written agreement for each client. That agreement, and not this page, sets what we deliver, who owns it and what it costs.</p>

      <h2>Using the site</h2>
      <p>Please do not misuse the site or try to break or overload it. The page’s text, drawings and code are ours unless they say otherwise.</p>

      <h2>Contact</h2>
      <p>Questions about these terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Our privacy policy is at <a href="/privacy">tilelabs.si/privacy</a>.</p>
    </LegalPage>
  );
}
