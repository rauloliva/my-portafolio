import Head from 'next/head';
import Layout from '../components/Layout';
import PortafolioView from '../components/PortafolioView';

const Portafolio = props => {
  return (
    <>
      <Head>
        <title>Raul Oliva | Portafolio</title>
        <meta
          name="description"
          content="Portafolio with Github repositories from the mexican developer Raul Oliva"
        />
        <meta
          name="keywords"
          content="Raul Oliva, portafolio, software developer, Github repositories, raul_oliva_cas, raul-oliva-27208817b, rauloliva"
        />
        <link
          rel="shortcut icon"
          href="/photo_profile.JPG"
          type="image/x-icon"
        />
      </Head>

      <Layout>
        <PortafolioView {...props} />
      </Layout>
    </>
  );
};

export default Portafolio;
