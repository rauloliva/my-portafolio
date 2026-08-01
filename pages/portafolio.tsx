import Layout from '@/components/layouts/Layout/Layout';
import PortafolioView from '@/components/features/PortafolioView/PortafolioView';
import MetaHead from '@/components/layouts/MetaHead';

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
