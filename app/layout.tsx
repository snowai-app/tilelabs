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

/* Marks the page as scripted before it paints, so things that arrive on scroll start hidden only when there is a script to show them. */
const SCRIPTED = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SCRIPTED }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
