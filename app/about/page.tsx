import Layout from '@/components/layouts/Layout/Layout';
import AboutMe from '@/components/features/AboutMe/AboutMe';

export const metadata = {
  title: 'About',
  description:
    'Raul Oliva is a professional Software Engineer focused on web development with experience working with frontend and backend technologies',
  openGraph: {
    title: 'About | Raul Oliva',
    description:
      'Raul Oliva is a professional Software Engineer focused on web development with experience working with frontend and backend technologies',
    url: 'https://my-portafolio-rho.vercel.app/about',
    images: [{ url: '/photo_profile.jpg', alt: 'Raul Oliva' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Raul Oliva',
    description:
      'Raul Oliva is a professional Software Engineer focused on web development with experience working with frontend and backend technologies',
    images: ['/photo_profile.jpg'],
  },
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutMe />
    </Layout>
  );
}
