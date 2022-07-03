import style from '../styles/modules/layout.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Moon from '../img/moon.svg';
import Sun from '../img/sun.svg';

const Layout = props => {
  const color_layout =
    props.theme == 'dark' ? style.layout_dark : style.layout_light;
  const change_contrast_img = props.theme == 'dark' ? Sun : Moon;

  return (
    <div className={style.layout.concat(' ', color_layout)}>
      <nav className={style.layout__nav}>
        <label className={style.layout__nav_author}>
          <Link href="/">
            <a>Raul Oliva</a>
          </Link>
        </label>
        <Link href="/my-works">
          <a className={style.layout__nav_link}>Portafolio</a>
        </Link>
        <Image
          src={change_contrast_img}
          onClick={() => props.changeTheme(props.theme)}
          alt="Moon"
          className={style.layout__nav_change_contrast}
        />
      </nav>

      {props.children}

      <footer className={style.layout_footer}>
        <h3>&copy; Copyright { new Date().getUTCFullYear()} by Raul Oliva</h3>
      </footer>
    </div>
  );
};

export default Layout;
