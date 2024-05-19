import Layout from '../components/Layout';
import AboutMe from '../components/AboutMe';
import MetaHead from '../components/DOM/MetaHead';

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
