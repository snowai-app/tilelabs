import Behaviour from './Behaviour';
import DemoDialog from './DemoDialog';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import How from './How';
import Products from './Products';
import Promises from './Promises';
import Talk from './Talk';
import What from './What';
import { FRAME, type Lang } from '@/lib/legal-words';

/** The front page in one language: the same page in English, Spanish, Hindi and Chinese (operator, 26 October 2026, T-3821). */
export default function Home({ lang }: { lang: Lang }) {
  return (
    <div lang={FRAME[lang].htmlLang}>
      <Header lang={lang} />
      <main id="top">
        <Hero lang={lang} />
        <What lang={lang} />
        <How lang={lang} />
        <Products lang={lang} />
        <Promises lang={lang} />
        <Talk lang={lang} />
      </main>
      <Footer lang={lang} />
      <DemoDialog lang={lang} />
      <Behaviour lang={lang} />
    </div>
  );
}
