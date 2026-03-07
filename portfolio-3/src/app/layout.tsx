import type { Metadata } from 'next';
import { inter, firaCode } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mustafa Ansari — Portfolio',
  description:
    'AI Engineer & Entrepreneur. Building agentic AI systems that ship across industries and continents.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
