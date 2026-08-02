import Layout from '@/components/layouts/Layout/Layout';
import PortafolioView from '@/components/features/PortafolioView/PortafolioView';

export const metadata = {
  title: 'Portafolio',
  description:
    'Check out all projects and Github repositories developed by Raul Oliva',
  openGraph: {
    title: 'Portafolio | Raul Oliva',
    description:
      'Check out all projects and Github repositories developed by Raul Oliva',
    url: 'https://my-portafolio-rho.vercel.app/portafolio',
    images: [{ url: '/photo_profile.jpg', alt: 'Raul Oliva' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio | Raul Oliva',
    description:
      'Check out all projects and Github repositories developed by Raul Oliva',
    images: ['/photo_profile.jpg'],
  },
};

export default function PortafolioPage() {
  return (
    <Layout>
      <PortafolioView />
    </Layout>
  );
}
