import Layout from '@/components/layouts/Layout/Layout';
import MyResume from '@/components/features/MyResume/MyResume';

export const metadata = {
  title: 'Resume',
  description: 'Read and download the Resume of Raul Oliva',
  openGraph: {
    title: 'Resume | Raul Oliva',
    description: 'Read and download the Resume of Raul Oliva',
    url: 'https://my-portafolio-rho.vercel.app/resume',
    images: [{ url: '/photo_profile.jpg', alt: 'Raul Oliva' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume | Raul Oliva',
    description: 'Read and download the Resume of Raul Oliva',
    images: ['/photo_profile.jpg'],
  },
};

export default function ResumePage() {
  return (
    <Layout>
      <MyResume />
    </Layout>
  );
}
