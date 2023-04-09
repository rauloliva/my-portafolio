import Head from 'next/head';
import Layout from '../components/Layout';
import Portafolio from '../components/Portafolio';

const MyWorks = props => {
  return (
    <>
      <Head>
        <title>My Portafolio</title>
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

      <Layout theme={props.theme} changeTheme={props.changeTheme}>
        <Portafolio {...props} theme={props.theme} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // get Github repos
  const res = await fetch('https://api.github.com/users/rauloliva/repos');
  const repositories = await res.json();

  return {
    props: {
      repositories,
    },
    revalidate: 10
  };
}

export default MyWorks;
