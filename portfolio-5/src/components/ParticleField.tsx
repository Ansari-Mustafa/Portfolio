/* ═══════════════════════════════════════════════════════════════
   ParticleField — CSS-only animated starfield background
   ═══════════════════════════════════════════════════════════════ */

// Deterministic particle data (no Math.random at runtime for SSR safety)
const particles = [
  { x: 5, y: 12, size: 1, opacity: 0.3, duration: 35, delay: 0, desktop: false },
  { x: 12, y: 45, size: 2, opacity: 0.5, duration: 28, delay: 2, desktop: false },
  { x: 18, y: 78, size: 1, opacity: 0.2, duration: 42, delay: 5, desktop: false },
  { x: 25, y: 23, size: 3, opacity: 0.6, duration: 20, delay: 1, desktop: false },
  { x: 32, y: 56, size: 1, opacity: 0.4, duration: 38, delay: 8, desktop: false },
  { x: 38, y: 89, size: 2, opacity: 0.3, duration: 25, delay: 3, desktop: false },
  { x: 45, y: 34, size: 1, opacity: 0.7, duration: 33, delay: 6, desktop: false },
  { x: 52, y: 67, size: 2, opacity: 0.5, duration: 29, delay: 4, desktop: false },
  { x: 58, y: 91, size: 1, opacity: 0.2, duration: 44, delay: 9, desktop: false },
  { x: 65, y: 15, size: 3, opacity: 0.4, duration: 22, delay: 7, desktop: false },
  { x: 72, y: 48, size: 1, opacity: 0.6, duration: 36, delay: 2, desktop: false },
  { x: 78, y: 82, size: 2, opacity: 0.3, duration: 31, delay: 5, desktop: false },
  { x: 85, y: 29, size: 1, opacity: 0.5, duration: 40, delay: 1, desktop: false },
  { x: 92, y: 61, size: 2, opacity: 0.4, duration: 27, delay: 8, desktop: false },
  { x: 97, y: 93, size: 1, opacity: 0.7, duration: 34, delay: 3, desktop: false },
  { x: 3, y: 37, size: 2, opacity: 0.3, duration: 39, delay: 6, desktop: false },
  { x: 15, y: 72, size: 1, opacity: 0.5, duration: 23, delay: 4, desktop: false },
  { x: 28, y: 8, size: 3, opacity: 0.2, duration: 45, delay: 9, desktop: false },
  { x: 42, y: 53, size: 1, opacity: 0.6, duration: 30, delay: 0, desktop: false },
  { x: 55, y: 85, size: 2, opacity: 0.4, duration: 37, delay: 7, desktop: false },
  { x: 68, y: 19, size: 1, opacity: 0.3, duration: 26, delay: 2, desktop: false },
  { x: 82, y: 64, size: 2, opacity: 0.7, duration: 32, delay: 5, desktop: false },
  { x: 95, y: 41, size: 1, opacity: 0.5, duration: 41, delay: 1, desktop: false },
  { x: 8, y: 96, size: 3, opacity: 0.2, duration: 24, delay: 8, desktop: false },
  { x: 22, y: 31, size: 1, opacity: 0.4, duration: 43, delay: 3, desktop: false },
  { x: 35, y: 74, size: 2, opacity: 0.6, duration: 21, delay: 6, desktop: false },
  { x: 48, y: 17, size: 1, opacity: 0.3, duration: 38, delay: 4, desktop: false },
  { x: 62, y: 58, size: 2, opacity: 0.5, duration: 29, delay: 9, desktop: false },
  { x: 75, y: 87, size: 1, opacity: 0.4, duration: 35, delay: 0, desktop: false },
  { x: 88, y: 42, size: 3, opacity: 0.2, duration: 27, delay: 7, desktop: false },
  // Desktop-only particles (hidden on mobile)
  { x: 2, y: 5, size: 1, opacity: 0.3, duration: 33, delay: 2, desktop: true },
  { x: 7, y: 28, size: 2, opacity: 0.5, duration: 41, delay: 5, desktop: true },
  { x: 11, y: 62, size: 1, opacity: 0.2, duration: 22, delay: 1, desktop: true },
  { x: 16, y: 88, size: 2, opacity: 0.6, duration: 36, delay: 8, desktop: true },
  { x: 21, y: 14, size: 1, opacity: 0.4, duration: 28, delay: 3, desktop: true },
  { x: 27, y: 47, size: 3, opacity: 0.3, duration: 44, delay: 6, desktop: true },
  { x: 33, y: 71, size: 1, opacity: 0.7, duration: 25, delay: 4, desktop: true },
  { x: 37, y: 95, size: 2, opacity: 0.2, duration: 39, delay: 9, desktop: true },
  { x: 41, y: 22, size: 1, opacity: 0.5, duration: 31, delay: 0, desktop: true },
  { x: 47, y: 55, size: 2, opacity: 0.4, duration: 43, delay: 7, desktop: true },
  { x: 51, y: 83, size: 1, opacity: 0.3, duration: 20, delay: 2, desktop: true },
  { x: 56, y: 9, size: 3, opacity: 0.6, duration: 37, delay: 5, desktop: true },
  { x: 61, y: 39, size: 1, opacity: 0.2, duration: 30, delay: 1, desktop: true },
  { x: 66, y: 66, size: 2, opacity: 0.5, duration: 42, delay: 8, desktop: true },
  { x: 71, y: 92, size: 1, opacity: 0.4, duration: 24, delay: 3, desktop: true },
  { x: 76, y: 18, size: 2, opacity: 0.7, duration: 35, delay: 6, desktop: true },
  { x: 81, y: 51, size: 1, opacity: 0.3, duration: 29, delay: 4, desktop: true },
  { x: 86, y: 77, size: 3, opacity: 0.2, duration: 40, delay: 9, desktop: true },
  { x: 91, y: 33, size: 1, opacity: 0.5, duration: 26, delay: 0, desktop: true },
  { x: 96, y: 69, size: 2, opacity: 0.4, duration: 38, delay: 7, desktop: true },
  { x: 4, y: 52, size: 1, opacity: 0.6, duration: 32, delay: 2, desktop: true },
  { x: 9, y: 81, size: 2, opacity: 0.3, duration: 45, delay: 5, desktop: true },
  { x: 14, y: 25, size: 1, opacity: 0.5, duration: 23, delay: 1, desktop: true },
  { x: 19, y: 59, size: 3, opacity: 0.2, duration: 34, delay: 8, desktop: true },
  { x: 24, y: 94, size: 1, opacity: 0.4, duration: 27, delay: 3, desktop: true },
  { x: 29, y: 38, size: 2, opacity: 0.7, duration: 41, delay: 6, desktop: true },
  { x: 34, y: 11, size: 1, opacity: 0.3, duration: 30, delay: 4, desktop: true },
  { x: 39, y: 44, size: 2, opacity: 0.5, duration: 36, delay: 9, desktop: true },
  { x: 44, y: 76, size: 1, opacity: 0.2, duration: 22, delay: 0, desktop: true },
  { x: 49, y: 3, size: 3, opacity: 0.6, duration: 39, delay: 7, desktop: true },
  { x: 54, y: 35, size: 1, opacity: 0.4, duration: 28, delay: 2, desktop: true },
  { x: 59, y: 68, size: 2, opacity: 0.3, duration: 43, delay: 5, desktop: true },
  { x: 64, y: 97, size: 1, opacity: 0.5, duration: 25, delay: 1, desktop: true },
  { x: 69, y: 42, size: 2, opacity: 0.7, duration: 37, delay: 8, desktop: true },
  { x: 74, y: 7, size: 1, opacity: 0.2, duration: 33, delay: 3, desktop: true },
  { x: 79, y: 56, size: 3, opacity: 0.4, duration: 44, delay: 6, desktop: true },
  { x: 84, y: 84, size: 1, opacity: 0.6, duration: 21, delay: 4, desktop: true },
  { x: 89, y: 21, size: 2, opacity: 0.3, duration: 40, delay: 9, desktop: true },
  { x: 94, y: 49, size: 1, opacity: 0.5, duration: 26, delay: 0, desktop: true },
  { x: 99, y: 75, size: 2, opacity: 0.4, duration: 35, delay: 7, desktop: true },
];

export default function ParticleField() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-accent-cyan animate-float ${p.desktop ? 'particle-desktop' : ''}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      {/* Subtle nebula gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(139, 92, 246, 0.04), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(6, 182, 212, 0.03), transparent)',
        }}
      />
    </div>
  );
}
