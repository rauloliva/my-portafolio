import Head from 'next/head';

interface MetaHeaderProps {
  title: string;
  description: string;
  uri: string;
}

const SITE_URL = 'https://my-portafolio-rho.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/photo_profile.jpg`;

const MetaHead = ({ title, description, uri }: MetaHeaderProps) => {
  const pageTitle = title ? `Raul Oliva | ${title}` : 'Raul Oliva';
  const fullUrl = `${SITE_URL}${uri}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Raul Oliva, biography, software developer, raul_oliva_cas, raul-oliva-27208817b, rauloliva"
      />
      <link rel="shortcut icon" href="/photo_profile.jpg" type="image/x-icon" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:url" content={fullUrl} />

      {/* Twitter */}
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={DEFAULT_IMAGE} />
    </Head>
  );
};

export default MetaHead;
