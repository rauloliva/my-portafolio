import Layout from '@/components/layouts/Layout/Layout';
import Presentation from '@/components/features/Presentation/Presentation';

export const metadata = {
  title: 'Home',
  description:
    'This is the portafolio of Raul Oliva, sharing his experience as a Web Developer and his Github Repositories',
  openGraph: {
    title: 'Home | Raul Oliva',
    description:
      'This is the portafolio of Raul Oliva, sharing his experience as a Web Developer and his Github Repositories',
    url: 'https://my-portafolio-rho.vercel.app/',
    images: [{ url: '/photo_profile.jpg', alt: 'Raul Oliva' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Raul Oliva',
    description:
      'This is the portafolio of Raul Oliva, sharing his experience as a Web Developer and his Github Repositories',
    images: ['/photo_profile.jpg'],
  },
};

export default function HomePage() {
  return (
    <Layout>
      <Presentation />
    </Layout>
  );
}
