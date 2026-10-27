import type { Lang } from '@/lib/legal-words';

/** Small drawn flags for the language menu, so they look the same on every device (a flag emoji is only two letters on Windows).
    A language is not a country: English is the Union Jack, Spanish the plain red and yellow bands, Hindi India's flag, Chinese the red field with the yellow star; Japanese the red disc, Korean the red and blue taegeuk on white, Portuguese the green and red fields (T-3829); Arabic the green field of the Arab League with a white ring, since no one country speaks for it (T-3832). Drawn as the family's menu draws them (snowai family/flags.tsx). */
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
        {code === 'ja' && (<>
          <rect width="24" height="16" fill="#fff" />
          <circle cx="12" cy="8" r="4.6" fill="#BC002D" />
        </>)}
        {code === 'ko' && (<>
          <rect width="24" height="16" fill="#fff" />
          <circle cx="12" cy="8" r="4.2" fill="#CD2E3A" />
          <path d="M8.4 9.5a3.6 3.6 0 0 0 7.2-1.5 1.8 1.8 0 0 1-3.6 0 1.8 1.8 0 0 0-3.6 1.5z" fill="#0047A0" />
          <path d="M3.2 3.2l2.4 1.6M3.2 12.8l2.4-1.6M18.4 4.8l2.4-1.6M18.4 11.2l2.4 1.6" stroke="#000" strokeWidth="1.1" />
        </>)}
        {code === 'ar' && (<>
          <rect width="24" height="16" fill="#007A3D" />
          <circle cx="12" cy="8" r="4.2" fill="none" stroke="#fff" strokeWidth="1.3" />
          <path d="M9 11.6h6" stroke="#fff" strokeWidth="1" />
        </>)}
        {code === 'pt' && (<>
          <rect width="24" height="16" fill="#DA291C" />
          <rect width="9.6" height="16" fill="#046A38" />
          <circle cx="9.6" cy="8" r="2.6" fill="#FFE900" />
          <circle cx="9.6" cy="8" r="1.4" fill="#DA291C" />
        </>)}
      </g>
      <rect width="24" height="16" rx="2" fill="none" stroke="rgba(0,0,0,.18)" />
    </svg>
  );
}
