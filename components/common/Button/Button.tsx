import { ReactNode } from 'react';
import Link from 'next/link';
import style from './button.module.scss';

interface ButtonProps {
  href: string;
  isExt?: boolean;
  children: ReactNode;
}

const Button = ({ href, isExt = false, children }: ButtonProps) => (
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
