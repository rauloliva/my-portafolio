import style from '../../styles/modules/button.module.scss';
import Link from 'next/link';

const Button = ({ href, isExt = false, children }) => (
  <>
    {isExt ? (
      <a href={href} target="_blank" rel="noreferrer">
        <button className={style.btn}>{children}</button>
      </a>
    ) : (
      <Link href={href}>
        <button className={style.btn}>{children}</button>
      </Link>
    )}
  </>
);

export default Button;
