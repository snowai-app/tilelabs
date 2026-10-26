const STEPS: [string, string][] = [
  ['Listen', 'We start with how you work today: the forms, the spreadsheets and the steps nobody wrote down.'],
  ['Shape', 'You get a version you can click, in your words and with your numbers, before anything is built.'],
  ['Build', 'We build in steps you can see, and show you each one as it works.'],
  ['Launch and improve', 'Your software goes live and keeps getting better, without a new project for every update.'],
];

export default function How() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="head" data-reveal>
          <span className="mono">How we work</span>
          <h2>From a conversation to software people use.</h2>
        </div>
        <div className="steps" id="steps">
          {STEPS.map(([title, text]) => (
            <div className="step" key={title}><span className="dot" /><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
