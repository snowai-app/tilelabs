/* Small pieces used in more than one place. */

export function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <i /><i /><i /><i />
    </span>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Tile Labs, top of page">
      <Mark />Tile Labs
    </a>
  );
}
