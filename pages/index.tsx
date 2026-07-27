import Layout from '@/components/layouts/Layout/Layout';
import Presentation from '@/components/features/Presentation/Presentation';
import MetaHead from '@/components/layouts/MetaHead';

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
