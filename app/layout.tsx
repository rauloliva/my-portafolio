import type { ReactNode } from 'react';
import '@/styles/globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Raul Oliva',
  description:
    'Portfolio and developer profile for Raul Oliva, software engineer and frontend developer.',
  metadataBase: new URL('https://my-portafolio-rho.vercel.app'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
