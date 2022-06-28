import Head from 'next/head';
import Layout from '../components/Layout';
import Bio from '../components/Bio'

const Home = () => {
  return (
    <>
      <Head>
        <title>Raul Oliva - Home</title>
      </Head>
      <Layout>
        <Bio />
      </Layout>
    </>
  );
};

export default Home;
