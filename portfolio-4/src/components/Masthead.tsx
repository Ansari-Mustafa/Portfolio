import ThinRule from './ThinRule';
import ThickRule from './ThickRule';

export default function Masthead() {
  return (
    <header className="pb-8">
      {/* Thin rule at very top */}
      <ThinRule dark />

      {/* Name */}
      <h1
        className="py-8 text-center text-[2.5rem] font-black leading-none tracking-tight sm:text-[3.5rem] md:text-[4.5rem]"
        style={{
          fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
          color: 'var(--color-headline)',
        }}
      >
        MUSTAFA ANSARI
      </h1>

      {/* Thick rule below name */}
      <ThickRule />

      {/* Subtitle */}
      <p
        className="caption-label mt-5 text-center"
        style={{ fontSize: '0.75rem', letterSpacing: '0.2em' }}
      >
        AI Engineer &amp; Entrepreneur
      </p>

      {/* Dateline */}
      <p
        className="caption-label mt-2 text-center"
        style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}
      >
        Profile &nbsp;|&nbsp; Freiburg, Germany &nbsp;|&nbsp; 2026
      </p>

      {/* Thin rule at bottom */}
      <div className="mt-5">
        <ThinRule />
      </div>
    </header>
  );
}
