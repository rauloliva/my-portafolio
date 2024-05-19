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
import { useRouter } from 'next/router';
import style from '../styles/modules/layout.module.scss';

const NavBar = () => {
  const router = useRouter();
  const view = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    homeStyle,
    aboutStyle,
    resumeStyle,
    portafolioStyle,
    contactStyle,
  } = defineLinkColor(view);

  const menuLinks = [
    <Link className={homeStyle} href="/" key="home">
      Home
    </Link>,
    <Link className={aboutStyle} href="/about" key="about">
      About
    </Link>,
    <Link className={resumeStyle} href="/resume" key="resume">
      Resume
    </Link>,
    <Link className={portafolioStyle} href="/portafolio" key="portafolio">
      Portafolio
    </Link>,
    <Link className={contactStyle} href="/contact" key="contacts">
      Contact
    </Link>,
  ];

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
        {menuLinks.map((link, index) => (
          <NavbarItem key={`${link}-${index}`}>{link}</NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className={style.layout__card_nav_burger}>
        {menuLinks.map((item, index) => (
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

const defineLinkColor = view => {
  const homeStyle =
    view == '/' ? style.layout__link_active : style.layout__link_unactive;

  const aboutStyle =
    view == '/about' ? style.layout__link_active : style.layout__link_unactive;

  const resumeStyle =
    view == '/resume'
      ? style.layout__link_active
      : style.layout__link_unactive;

  const portafolioStyle =
    view == '/portafolio'
      ? style.layout__link_active
      : style.layout__link_unactive;

  const contactStyle =
    view == '/contact'
      ? style.layout__link_active
      : style.layout__link_unactive;

  return {
    homeStyle,
    aboutStyle,
    resumeStyle,
    portafolioStyle,
    contactStyle,
  };
};

export default NavBar;
