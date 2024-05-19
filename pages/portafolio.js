import Layout from '../components/Layout';
import PortafolioView from '../components/PortafolioView';
import MetaHead from '../components/DOM/MetaHead';

const metadata = {
  title: 'Portafolio',
  description:
    'Check out all projects and Github repositories developed by Raul Oliva',
  uri: '/portafolio',
};

const Portafolio = () => (
  <>
    <MetaHead {...metadata} />

    <Layout>
      <PortafolioView />
    </Layout>
  </>
);

export default Portafolio;
