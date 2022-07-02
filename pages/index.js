import Head from 'next/head';
import Layout from '../components/Layout';
import Bio from '../components/Bio';

const Home = props => {
  return (
    <>
      <Head>
        <title>Raul Oliva - Home Page</title>
        <meta name='description' content='Brief biography about the mexican developer Raul Oliva'/>
        <meta name='keywords' content='Raul Oliva, portafolio, software developer, Github repositories'/>
      </Head>
      <Layout theme={props.theme} changeTheme={props.changeTheme}>
        <Bio />
      </Layout>
    </>
  );
};

export default Home;
