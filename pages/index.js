import Layout from '../components/Layout';
import Presentation from '../components/Presentation';
import MetaHead from '../components/DOM/MetaHead';

const metadata = {
  title: 'Home',
  description:
    'This is the portafolio of Raul Oliva, sharing his experience as a Web Developer and his Github Repositories',
  uri: '/',
};

const Home = () => (
  <>
    <MetaHead {...metadata} />

    <Layout>
      <Presentation />
    </Layout>
  </>
);

export default Home;
