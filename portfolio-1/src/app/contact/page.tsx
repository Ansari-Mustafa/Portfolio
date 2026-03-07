import type { Metadata } from 'next';
import { ContactPage } from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Mustafa Ansari — open to full-time roles, consulting, freelance, and strategic partnerships.',
};

export default function Page() {
  return <ContactPage />;
}
