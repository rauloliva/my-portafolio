import Layout from '../components/Layout';
import ContactMe from '../components/ContactMe';
import MetaHead from '../components/DOM/MetaHead';

const metadata = {
  title: 'Contact',
  description: 'Contact Raul Oliva through his different social media accounts',
  uri: '/contact',
};

const Contact = () => (
  <>
    <MetaHead {...metadata} />

    <Layout>
      <ContactMe />
    </Layout>
  </>
);

export default Contact;
