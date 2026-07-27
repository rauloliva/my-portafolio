import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/system';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
