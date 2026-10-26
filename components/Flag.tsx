import type { Lang } from '@/lib/legal-words';

/** Small drawn flags for the language menu, so they look the same on every device (a flag emoji is only two letters on Windows).
    A language is not a country: English is the Union Jack, Spanish the plain red and yellow bands, Hindi India's flag, Chinese the red field with the yellow star. Drawn as the family's menu draws them (snowai family/flags.tsx). */
export default function Flag({ code, id }: { code: Lang; id: string }) {
  const clip = `flag-${id}-${code}`;
  return (
    <svg className="lsw-f" width="24" height="16" viewBox="0 0 24 16" aria-hidden="true" focusable="false">
      <defs><clipPath id={clip}><rect width="24" height="16" rx="2" /></clipPath></defs>
      <g clipPath={`url(#${clip})`}>
        {code === 'en' && (<>
          <rect width="24" height="16" fill="#012169" />
          <path d="M0 0L24 16M24 0L0 16" stroke="#fff" strokeWidth="3.2" />
          <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.2" />
          <path d="M12 0V16M0 8H24" stroke="#fff" strokeWidth="5.2" />
          <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="3" />
        </>)}
        {code === 'es' && (<>
          <rect width="24" height="16" fill="#AA151B" />
          <rect y="4" width="24" height="8" fill="#F1BF00" />
        </>)}
        {code === 'hi' && (<>
          <rect width="24" height="5.34" fill="#FF9933" />
          <rect y="5.33" width="24" height="5.34" fill="#fff" />
          <rect y="10.66" width="24" height="5.34" fill="#138808" />
          <circle cx="12" cy="8" r="2.1" fill="none" stroke="#000080" strokeWidth=".6" />
          <circle cx="12" cy="8" r=".35" fill="#000080" />
        </>)}
        {code === 'zh' && (<>
          <rect width="24" height="16" fill="#DE2910" />
          <path d="M5 2.2l.9 2.7h2.8l-2.3 1.7.9 2.7L5 7.6 2.7 9.3l.9-2.7L1.3 4.9h2.8z" fill="#FFDE00" />
        </>)}
      </g>
      <rect width="24" height="16" rx="2" fill="none" stroke="rgba(0,0,0,.18)" />
    </svg>
  );
}
