import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800 }}>Not here.</h1>
        <p style={{ marginTop: 14, color: 'var(--ink-2)' }}>That page does not exist.</p>
        <p style={{ marginTop: 22 }}><Link className="btn primary" href="/">Back to Tile Labs</Link></p>
      </div>
    </main>
  );
}
