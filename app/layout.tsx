import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource-variable/hanken-grotesk/index.css';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import './tilelabs.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tilelabs.si'),
  title: 'Tile Labs: software, cut to fit',
  description: 'Tile Labs makes software products, white-label versions that wear your brand, and custom software built to your specification.',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f4f4f9' }, { media: '(prefers-color-scheme: dark)', color: '#15121f' }] };

/* Sets the page's real language on <html> from its address (T-3833), so a browser does not take a Spanish, Hindi, Chinese, Japanese, Korean, Portuguese or Arabic page for an English one. The google notranslate meta, translate="no" and the notranslate class stop the browsers' own translators (Chrome's Google Translate, Edge's Microsoft Translator, Safari's and Firefox's) from offering to convert the page: the site's own language menu is the only conversion (T-3833).
   Marks the page as scripted before it paints, so things that arrive on scroll start hidden only when there is a script to show them, and applies the Light or Dark choice a visitor made (kept on their own device only, never sent anywhere). */
const SCRIPTED = "document.documentElement.classList.add('js');try{var m=location.pathname.split('/')[1];var L={es:'es',hi:'hi',zh:'zh-Hans',ja:'ja',ko:'ko',pt:'pt',ar:'ar'};if(L[m]){document.documentElement.lang=L[m];if(m==='ar')document.documentElement.dir='rtl'}}catch(e){}try{var t=localStorage.getItem('tilelabs-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" translate="no" className="notranslate" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <script dangerouslySetInnerHTML={{ __html: SCRIPTED }} />
      </head>
      <body translate="no" className="notranslate" suppressHydrationWarning>{children}</body>
    </html>
  );
}
