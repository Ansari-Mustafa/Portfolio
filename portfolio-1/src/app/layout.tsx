import type { Metadata } from 'next';
import { dmSans, jetbrainsMono, instrumentSerif } from '@/lib/fonts';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mustafaansari.com'),
  title: {
    default: 'Mustafa Ansari — AI Engineer & Entrepreneur',
    template: '%s | Mustafa Ansari',
  },
  description:
    'I build AI systems that actually ship. 8+ products across 6+ industries, deployed on 3 continents.',
  keywords: [
    'AI Engineer',
    'Entrepreneur',
    'Multi-Agent Systems',
    'Enterprise AI',
    'LangGraph',
    'FastAPI',
  ],
  authors: [{ name: 'Mustafa Ansari' }],
  openGraph: {
    title: 'Mustafa Ansari — AI Engineer & Entrepreneur',
    description:
      'I build AI systems that actually ship. 8+ products across 6+ industries.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
