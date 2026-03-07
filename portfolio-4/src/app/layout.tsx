import type { Metadata } from 'next';
import { playfair, sourceSerif, inter } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mustafa Ansari — Profile',
  description:
    'AI Engineer & Entrepreneur. Building intelligent systems that ship across industries and continents.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSerif.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
