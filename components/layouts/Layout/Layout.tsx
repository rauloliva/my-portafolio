import { ReactNode } from 'react';
import style from './layout.module.scss';
import NavBar from '../NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className={style.layout}>
    <div className={style.layout__card}>
      <NavBar />
      <div className={style.layout__card_content}>{children}</div>
    </div>
  </div>
);

export default Layout;
