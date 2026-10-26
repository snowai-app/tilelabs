import { Fragment } from 'react';
import LegalPage from './LegalPage';
import { CONTACT_EMAIL } from '@/lib/contact';
import { FRAME, PRIVACY, TERMS, fill, legalPath, type Block, type Lang } from '@/lib/legal-words';

/** One paragraph: the company's words filled in, the link slots drawn as links. */
function Text({ p, lang }: { p: string; lang: Lang }) {
  const parts = fill(p, lang).split(/(\{(?:mail|privacy|snowPrivacy|snowTerms)\})/);
  return (
    <>
      {parts.map((s, i) => {
        switch (s) {
          case '{mail}': return <a key={i} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
          case '{privacy}': return <a key={i} href={legalPath(lang, 'privacy')}>tilelabs.si{legalPath(lang, 'privacy')}</a>;
          case '{snowPrivacy}': return <a key={i} href="https://snowai.app/privacy">snowai.app/privacy</a>;
          case '{snowTerms}': return <a key={i} href="https://snowai.app/terms">snowai.app/terms</a>;
          default: return <Fragment key={i}>{s}</Fragment>;
        }
      })}
    </>
  );
}

/** The company's privacy policy or terms in one language. */
export default function LegalDoc({ lang, doc }: { lang: Lang; doc: 'privacy' | 'terms' }) {
  const blocks: Block[] = (doc === 'privacy' ? PRIVACY : TERMS)[lang];
  const f = FRAME[lang];
  return (
    <LegalPage lang={lang} doc={doc} title={doc === 'privacy' ? f.privacyTitle : f.termsTitle}>
      {blocks.map((b, i) => (
        <Fragment key={i}>
          {b.h ? <h2>{b.h}</h2> : null}
          <p><Text p={b.p} lang={lang} /></p>
        </Fragment>
      ))}
    </LegalPage>
  );
}
