import ThinRule from './ThinRule';

export default function Colophon() {
  return (
    <footer className="pb-12 pt-4">
      <ThinRule />
      <p
        className="caption-label mt-4 text-center"
        style={{ fontSize: '0.625rem', letterSpacing: '0.1em' }}
      >
        &copy; 2026 Mustafa Ansari. All rights reserved.
      </p>
    </footer>
  );
}
