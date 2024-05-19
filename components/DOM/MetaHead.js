import Head from 'next/head';

const MetaHead = ({ title, description, uri }) => (
  <>
    <Head>
      <title>Raul Oliva | {title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Raul Oliva, biography, software developer, raul_oliva_cas, raul-oliva-27208817b, rauloliva"
      />
      <link rel="shortcut icon" href="/photo_profile.JPG" type="image/x-icon" />
      <meta property="og:title" content={'Raul Oliva | '.concat(title)} />
      <meta property="og:description" content={description} />
      <meta property="twitter:title" content={'Raul Oliva | '.concat(title)} />
      <meta property="twitter:description" content={description} />
      <meta
        property="og:image"
        content="https://my-portafolio-rho.vercel.app/photo_profile.JPG"
      />
      <meta
        property="twitter:image"
        content="https://my-portafolio-rho.vercel.app/photo_profile.JPG"
      />
      <meta
        property="og:url"
        content={'https://my-portafolio-rho.vercel.app'.concat(uri)}
      />
    </Head>
  </>
);

export default MetaHead;
