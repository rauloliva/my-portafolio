import Layout from '@/components/layouts/Layout/Layout';
import MyExperience from '@/components/features/MyExperience/MyExperience';

export const metadata = {
  title: 'Experience',
  description: 'Experiences and skills of Raul Oliva',
  openGraph: {
    title: 'Experience | Raul Oliva',
    description: 'Experiences and skills of Raul Oliva',
    url: 'https://my-portafolio-rho.vercel.app/experience',
    images: [{ url: '/photo_profile.jpg', alt: 'Raul Oliva' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Raul Oliva',
    description: 'Experiences and skills of Raul Oliva',
    images: ['/photo_profile.jpg'],
  },
  icons: {
    shortcut: {
      url: '/photo_profile.jpg',
      type: 'image/x-icon',
    },
  },
};

export default function ExperiencePage() {
  return (
    <Layout>
      <MyExperience />
    </Layout>
  );
}
