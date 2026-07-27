import Layout from '@/components/layouts/Layout/Layout';
import ContactMe from '@/components/features/ContactMe/ContactMe';
import MetaHead from '@/components/layouts/MetaHead';

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
