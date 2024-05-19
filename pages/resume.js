import Layout from '../components/Layout';
import MyResume from '../components/MyResume';
import MetaHead from '../components/DOM/MetaHead';

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
