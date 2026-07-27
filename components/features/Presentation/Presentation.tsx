import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';

import Button from '@/components/common/Button/Button';

import photo from '@/img/photo_profile.JPG';

import style from './presentation.module.scss';

const Presentation = () => (
  <>
    <section className={style.presentation__left}>
      <h3>Hello There,</h3>
      <h1>I&apos;m Raul Oliva</h1>
      <span className={style.presentation__left_occupation}>
        Software Engineer
      </span>

      <Button href="/about">
        About Me
        <FaLongArrowAltRight />
      </Button>
    </section>

    <section className={style.presentation__right}>
      <div className={style.presentation__image}>
        <Image src={photo} width="300" height="350" alt="Photo of Raul Oliva" />
      </div>
    </section>
  </>
);

export default Presentation;
