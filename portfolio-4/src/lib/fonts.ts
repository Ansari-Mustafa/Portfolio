import { Playfair_Display, Source_Serif_4, Inter } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
});

export const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  weight: ['400', '600'],
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['500', '600'],
});
