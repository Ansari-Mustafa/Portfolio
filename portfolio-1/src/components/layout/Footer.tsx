import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <p className="text-center text-sm text-text-dim">
          Mustafa Ansari &middot; AI Engineer &amp; Entrepreneur &middot; Germany &middot; {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}
