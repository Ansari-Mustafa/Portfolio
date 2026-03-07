import type { Metadata } from 'next';
import { mono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mustafa Ansari — Terminal',
  description:
    'AI Engineer & Entrepreneur. Building intelligent systems that actually ship.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="bg-terminal-bg text-terminal-primary font-[family-name:var(--font-mono)] min-h-screen">
        {children}
      </body>
    </html>
  );
}
