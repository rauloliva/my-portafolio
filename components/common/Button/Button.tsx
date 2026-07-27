import { ReactNode } from 'react'
import style from './button.module.scss';
import Link from 'next/link';

interface ButtonProps {
  href: string,
  isExt?: boolean,
  children: ReactNode
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
