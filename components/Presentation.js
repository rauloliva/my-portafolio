import Image from 'next/image';
import photo from '../img/photo_profile.JPG';
import style from '../styles/modules/presentation.module.scss';

const Presentation = () => (
  <>
    <section className={style.presentation__left}>
      <h3>Hello, My name is</h3>
      <h1>Raul Oliva</h1>
      <h3>
        And I&apos;m a{' '}
        <span className={style.presentation__left_occupation}>
          Software Engineer
        </span>
      </h3>
      <div className={style.presentation__left_about}>
        <p>
          Welcome to my website where you will be able to know about me, to see
          my portafolio where I show you all of my projects, to know what
          technical skills do I poses, to contact me through my different social
          media accounts or you can download my updated CV.
        </p>
      </div>
      <a href="/CV.pdf" target="_blank" rel="noreferrer">
        <button className={style.presentation__left_btn}>Download CV</button>
      </a>
    </section>

    <section className={style.presentation__right}>
      <div className={style.presentation__image}>
        <Image src={photo} width="300" height="350" alt="Photo of Raul Oliva" />
      </div>
    </section>
  </>
);

export default Presentation;
