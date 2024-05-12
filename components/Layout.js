import style from '../styles/modules/layout.module.scss';
import NavBar from './NavBar';

const Layout = ({ children }) => (
  <div className={style.layout}>
    <div className={style.layout__card}>
      <NavBar />
      <div className={style.layout__card_content}>{children}</div>
    </div>
  </div>
);

export default Layout;
