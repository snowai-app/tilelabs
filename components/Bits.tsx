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

export function Brand({ href = '#top', label }: { href?: string; label?: string }) {
  return (
    <a className="brand" href={href} aria-label={label ?? (href === '#top' ? 'Tile Labs, top of page' : 'Tile Labs, home')}>
      <Mark />Tile Labs
    </a>
  );
}
