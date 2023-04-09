import Head from 'next/head';
import Layout from '../components/Layout';
import Certifications from '../components/Certifications';

const MyCertifications = props => {
  return (
    <>
      <Head>
        <title>My Certifications</title>
        <meta
          name="description"
          content="List of certifications from different courses, displaying title, description, due date and the certification itself."
        />
        <meta
          name="keywords"
          content="Raul Oliva, certifications, courses, udemy, mongodb university, linkedin learning, software developer, raul_oliva_cas, raul-oliva-27208817b, rauloliva"
        />
        <link
          rel="shortcut icon"
          href="/photo_profile.JPG"
          type="image/x-icon"
        />
      </Head>

      <Layout theme={props.theme} changeTheme={props.changeTheme}>
        <Certifications theme={props.theme} />
      </Layout>
    </>
  );
};

export default MyCertifications;
