import type { Metadata } from 'next';
import { orbitron, exo2, firaCode } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mustafa Ansari — Operative Profile',
  description:
    'AI Engineer, Entrepreneur, and Builder. Building agentic AI systems that ship across industries and continents.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${exo2.variable} ${firaCode.variable}`}
    >
      <body className="bg-space-black text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
