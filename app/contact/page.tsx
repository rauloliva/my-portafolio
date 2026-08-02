import Layout from '@/components/layouts/Layout/Layout';
import ContactMe from '@/components/features/ContactMe/ContactMe';

export const metadata = {
  title: 'Contact',
  description: 'Contact Raul Oliva through his different social media accounts',
  openGraph: {
    title: 'Contact | Raul Oliva',
    description:
      'Contact Raul Oliva through his different social media accounts',
    url: 'https://my-portafolio-rho.vercel.app/contact',
    images: [{ url: '/photo_profile.jpg', alt: 'Raul Oliva' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Raul Oliva',
    description:
      'Contact Raul Oliva through his different social media accounts',
    images: ['/photo_profile.jpg'],
  },
  icons: {
    shortcut: {
      url: '/photo_profile.jpg',
      type: 'image/x-icon',
    },
  },
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactMe />
    </Layout>
  );
}
