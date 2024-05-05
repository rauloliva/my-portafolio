import style from '../styles/modules/Layout.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Layout = props => {
  const router = useRouter();
  const view = router.pathname;

  const { homeStyle, aboutStyle, portafolioStyle, contactStyle } = defineLinkColor(view);

  return (
    <div className={style.layout}>
      <div className={style.layout__card}>
        <title>Portafolio</title>
        <nav>
          <Link href="/" passHref legacyBehavior>
            <a className={homeStyle}>Home</a>
          </Link>

          <Link href="/about" passHref legacyBehavior>
            <a className={aboutStyle}>About</a>
          </Link>

          <Link href="/portafolio" passHref legacyBehavior>
            <a className={portafolioStyle}>Portafolio</a>
          </Link>

          <Link href="/contact" passHref legacyBehavior>
            <a className={contactStyle}>Contact</a>
          </Link>
        </nav>

        <div className={style.layout__card_content}>{props.children}</div>
      </div>
    </div>
  );
};

const defineLinkColor = view => {
  const homeStyle =
    view == '/' ? style.layout__link_active : style.layout__link_unactive;

  const aboutStyle =
    view == '/about' ? style.layout__link_active : style.layout__link_unactive;

  const portafolioStyle =
    view == '/portafolio'
      ? style.layout__link_active
      : style.layout__link_unactive;

  const contactStyle =
    view == '/contact'
      ? style.layout__link_active
      : style.layout__link_unactive;

  return { homeStyle, aboutStyle, portafolioStyle, contactStyle };
};

export default Layout;
