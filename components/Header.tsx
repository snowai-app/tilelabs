import { Brand } from './Bits';
import LangMenu from './LangMenu';
import ThemeSwitch from './ThemeSwitch';
import { SITE } from '@/lib/site-words';
import type { Lang } from '@/lib/legal-words';

export default function Header({ lang }: { lang: Lang }) {
  const S = SITE[lang];
  return (
    <header className="top">
      <div className="wrap">
        <Brand />
        <nav aria-label={S.navAria}>
          <a href="#what">{S.nav[0]}</a><a href="#how">{S.nav[1]}</a><a href="#products">{S.nav[2]}</a><a href="#talk">{S.nav[3]}</a>
        </nav>
        <div className="hdr-r"><ThemeSwitch lang={lang} /><LangMenu lang={lang} doc="home" /></div>
      </div>
    </header>
  );
}
