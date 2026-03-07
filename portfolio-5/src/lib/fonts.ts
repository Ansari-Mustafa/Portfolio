import { Orbitron, Exo_2, Fira_Code } from 'next/font/google';

export const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['700', '900'],
});

export const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600'],
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400'],
});
