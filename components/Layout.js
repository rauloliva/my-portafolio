import style from '../styles/modules/layout.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Moon from '../img/moon.svg'

const Layout = props => (
    <div className={style.layout}>
        <nav className={style.layout__nav}>
            <label className={style.layout__nav_author}>
                <Link href='/'>
                    <a>Raul Oliva</a>
                </Link>
            </label>
            <Link href='/my-works'>
                <a className={style.layout__nav_link}>Portafolio</a>
            </Link>
            <Image src={Moon} alt='Moon' className={style.layout__nav_moon} />
        </nav>
        {props.children}
    </div>
)

export default Layout