import Head from 'next/head';
import Layout from '../components/Layout';
import AboutView from '../components/AboutView';

const About = () => {
  return (
    <>
      <Head>
        <title>Raul Oliva | About</title>
        <meta
          name="description"
          content="Brief biography about the mexican developer Raul Oliva"
        />
        <meta
          name="keywords"
          content="Raul Oliva, biography, software developer, raul_oliva_cas, raul-oliva-27208817b, rauloliva"
        />
        <link
          rel="shortcut icon"
          href="/photo_profile.JPG"
          type="image/x-icon"
        />
      </Head>

      <Layout>
        <AboutView />
      </Layout>
    </>
  );
};

export default About;