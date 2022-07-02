import Head from 'next/head';
import Layout from '../components/Layout';
import Portafolio from '../components/Portafolio';

const MyWorks = props => {
  return (
    <>
      <Head>
        <title>Raul Oliva - Portafolio</title>
        <meta name='description' content='Portafolio about the mexican developer Raul Oliva'/>
        <meta name='keywords' content='Raul Oliva, portafolio, software developer, Github repositories'/>
      </Head>
      <Layout theme={props.theme} changeTheme={props.changeTheme}>
        <Portafolio {...props} theme={props.theme}/>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/rauloliva/repos')
    const repositories = await res.json()

    return {
        props: {
            repositories
        }
    }
}

export default MyWorks;
