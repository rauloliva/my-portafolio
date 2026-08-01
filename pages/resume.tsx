import Layout from '@/components/layouts/Layout/Layout';
import MyResume from '@/components/features/MyResume/MyResume';
import MetaHead from '@/components/layouts/MetaHead';

const metadata = {
  title: 'Resume',
  description: 'Read and download the Resume of Raul Oliva',
  uri: '/resume',
};

const Resume = () => (
  <>
    <MetaHead {...metadata} />

    <Layout>
      <MyResume />
    </Layout>
  </>
);

export default Resume;
