import style from '../styles/modules/layout.module.scss';
import NavBar from './NavBar';

const Layout = props => {
  return (
    <div className={style.layout}>
      <div className={style.layout__card}>

        <NavBar />

        <div className={style.layout__card_content}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
