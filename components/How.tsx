import { SITE } from '@/lib/site-words';
import type { Lang } from '@/lib/legal-words';

export default function How({ lang }: { lang: Lang }) {
  const H = SITE[lang].how;
  return (
    <section id="how">
      <div className="wrap">
        <div className="head" data-reveal>
          <span className="mono">{H.label}</span>
          <h2>{H.h}</h2>
        </div>
        <div className="steps" id="steps">
          {H.steps.map(([title, text]) => (
            <div className="step" key={title}><span className="dot" /><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
