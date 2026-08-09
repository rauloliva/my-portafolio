'use client';

import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import { useState } from 'react';

import { getScreens } from '@/constants';

import style from './Layout/layout.module.scss';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // construct the Nav links
  const screensList = getScreens().map(screen => (
    <Link className={screen.style} href={screen.href} key={screen.key}>
      {screen.name}
    </Link>
  ));

  return (
    <Navbar
      className={style.layout__card_nav}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        style={{ justifyContent: 'end', columnGap: '2.5rem' }}
      >
        {screensList.map((link, index) => (
          <NavbarItem key={`${link}-${index}`}>{link}</NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className={style.layout__card_nav_burger}>
        {screensList.map((item, index) => (
          <NavbarMenuItem
            style={{ margin: '10px 0', fontSize: '2.2em' }}
            key={`${item}-${index}`}
          >
            {item}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
