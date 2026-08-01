import Layout from '@/components/layouts/Layout/Layout';
import AboutMe from '@/components/features/AboutMe/AboutMe';
import MetaHead from '@/components/layouts/MetaHead';

const metadata = {
  title: 'About',
  description:
    'Raul Oliva is a professional Software Engineer focused on web development with experience working with frontend and backend technologies',
  uri: '/about',
};

const About = () => (
  <>
    <MetaHead {...metadata} />

    <Layout>
      <AboutMe />
    </Layout>
  </>
);
export default About;
