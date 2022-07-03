import Head from 'next/head';
import Layout from '../components/Layout';
import Bio from '../components/Bio';

const Home = props => {
  return (
    <>
      <Head>
        <title>Raul Oliva - Home Page</title>
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

      <Layout theme={props.theme} changeTheme={props.changeTheme}>
        <Bio />
      </Layout>
    </>
  );
};

export default Home;
