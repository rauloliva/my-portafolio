import { usePathname } from 'next/navigation';

import style from '@/components/layouts/Layout/layout.module.scss';

const activeStyle = style.layout__link_active;
const unactiveStyle = style.layout__link_unactive;

export function getScreens() {
  const pathname = usePathname();
  const view = pathname || '/';

  return [
    {
      name: 'Home',
      href: '/',
      key: 'home',
      style: view == '/' ? activeStyle : unactiveStyle,
    },
    {
      name: 'About',
      href: '/about',
      key: 'about',
      style: view == '/about' ? activeStyle : unactiveStyle,
    },
    {
      name: 'Experience',
      href: '/experience',
      key: 'experience',
      style: view == '/experience' ? activeStyle : unactiveStyle,
    },
    {
      name: 'Resume',
      href: '/resume',
      key: 'resume',
      style: view == '/resume' ? activeStyle : unactiveStyle,
    },
    {
      name: 'Portafolio',
      href: '/portafolio',
      key: 'portafolio',
      style: view == '/portafolio' ? activeStyle : unactiveStyle,
    },
    {
      name: 'Contact',
      href: '/contact',
      key: 'contact',
      style: view == '/contact' ? activeStyle : unactiveStyle,
    },
  ];
}
