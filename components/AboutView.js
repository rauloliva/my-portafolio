import Image from 'next/image';
import photo from '../img/about_photo.jpg';
import style from '../styles/modules/about.module.scss';

const AboutView = () => {
  return (
    <>
      <section className={style.about__left}>
        <div className={style.about__image}>
          <Image
            src={photo}
            width="300"
            height="350"
            alt="Photo of Raul Oliva"
          />
        </div>
      </section>

      <section className={style.about__right}>
        <h1 className={style.about__right_title}>
          About <span className={style.about__right_occupation}>Me</span>
        </h1>
        <p>
          My full name is Raul Adrian Oliva Castillo, I&apos;m&nbsp;
          {getAge('1997-09-28')} years old, I was born in Mexico city and
          I&apos;ve been living in Guadalajara, Mexico since 2008.
        </p>
        <p>
          In 2015 I started my computer science studies in UdeG (Univesidad de
          Guadalajara) and I graduated as a Software Engineer in 2019.
        </p>
        <p>
          In June 2019 I started working in Tata Consultancy Services (TCS) as
          IT Support Specialist.
        </p>
        <p>
          In November 2020 I started working in NXP Semiconductors as Web
          Publisher. In the present I&apos;m still working in this company.
        </p>
        <p>
          My hobbies are playing soccer, sometimes video games, I like traveling, programming and
          learning new things about the technology industy.
        </p>
      </section>
    </>
  );
};

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

export default AboutView;
