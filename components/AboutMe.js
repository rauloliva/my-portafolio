import Image from 'next/image';
import style from '../styles/modules/about.module.scss';
import AboutIcon from '../img/icons/aboutIcon.svg';
import FutbolIcon from '../img/icons/futbol-icon.svg';
import PlaneIcon from '../img/icons/plane-icon.svg';
import WebDevIcon from '../img/icons/web-dev-icon.svg';
import GamingIcon from '../img/icons/gaming-icon.svg';
import Title from './DOM/Title';
import Loading from './Loading';
import { useProfileOverview } from './hooks/useGithub';

const AboutMe = () => {
  const profileOverview = useProfileOverview()

  return (
    <>
      <section className={style.about__left}>
        <div className={style.about__image}>
          <Image
            src={AboutIcon}
            width="280"
            height="300"
            alt="Photo of Raul Oliva"
          />
        </div>
      </section>

      <section className={style.about__right}>
        <Title>About Me</Title>

        {profileOverview.length == 0 ? <Loading/> : profileOverview}

        <section className={style.about__right_hobbies}>
          <span>Hobbies</span>
          <div>
            <Image src={FutbolIcon} width="40" height="40" alt="Futbol Icon" />
            <Image src={PlaneIcon} width="50" height="50" alt="Futbol Icon" />
            <Image src={WebDevIcon} width="40" height="40" alt="Futbol Icon" />
            <Image src={GamingIcon} width="40" height="40" alt="Futbol Icon" />
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutMe;
