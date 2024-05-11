import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/system';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />;
    </NextUIProvider>
  );
}

export default MyApp;
