import type { Metadata } from 'next';
import { spaceGrotesk, spaceMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mustafa Ansari — Portfolio',
  description:
    'AI Engineer & Entrepreneur. Building AI systems that actually ship.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body
        className="antialiased"
        style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
