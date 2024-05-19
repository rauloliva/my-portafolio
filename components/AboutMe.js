import Image from 'next/image';
import photo from '../img/about_photo.jpg';
import style from '../styles/modules/about.module.scss';
import P from './DOM/P';
import FutbolIcon from '../img/icons/futbol-icon.svg';
import PlaneIcon from '../img/icons/plane-icon.svg';
import WebDevIcon from '../img/icons/web-dev-icon.svg';
import GamingIcon from '../img/icons/gaming-icon.svg';
import Title from './DOM/Title';

const getAge = () => {
  var today = new Date();
  var birthDate = new Date('1997-09-28');
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const AboutMe = () => (
  <>
    <section className={style.about__left}>
      <div className={style.about__image}>
        <Image src={photo} width="280" height="380" alt="Photo of Raul Oliva" />
      </div>
    </section>

    <section className={style.about__right}>
      <Title>About Me</Title>
      <P>
        My full name is Raul Adrian Oliva Castillo, I&apos;m&nbsp;
        {getAge('1997-09-28')} years old, I was born in Mexico city and
        I&apos;ve been living in Guadalajara, Mexico since 2008.
      </P>
      <P>
        I&apos;m a professional Systems Engineer with over 5 years of
        experience, driven by technology and motivated by knowledge. My strong
        skills are focused on web developement. Always eager to continue
        acquiring knowledge from all areas of technology development.
      </P>
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

export default AboutMe;
