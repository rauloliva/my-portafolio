import styles from '../styles/modules/bio.module.scss';
import globalStyles from '../styles/modules/globals.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import photo from '../img/photo_profile.JPG';

const getAge = dateString => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const Bio = () => (
  <div className={styles.container}>
    <section>
      <h2 className={styles.subtitle}>About me</h2>
      <div className={styles.section}>
        <div className={styles.section_text}>
          <p>
            I&apos;m a Software Engineer based in Guadalajara, Mexico,
            I&apos;m&nbsp;
            {getAge('1997-09-28')} years old and I started working in the
            industry since 2019, currently I’m working as a Web Publisher for
            NXP Semiconductors.
          </p>
          <p>My hobbies include: programming and learning, sports and music.</p>
          <p>I consider myself a full-stack developer.</p>
        </div>
        <div className={styles.section_image}>
          <Image
            src={photo}
            width="600"
            height="600"
            alt="Photo of Raul Oliva"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 className={styles.subtitle}>Bio</h2>
      <div className={styles.section.concat(' ', styles.section_text)}>
        <ul className={globalStyles.list}>
          <li>
            <span className={globalStyles.bottom_line}>1997</span> Born in
            Mexico City
          </li>
          <li>
            <span className={globalStyles.bottom_line}>2015</span> Graduated
            from High School
          </li>
          <li>
            <span className={globalStyles.bottom_line}>2019</span> Graduated
            from College
          </li>
          <li>
            <span className={globalStyles.bottom_line}>2019</span> Started
            working at Tata Consultancy Services
          </li>
          <li>
            <span className={globalStyles.bottom_line}>2020</span> Started
            working at NXP Semiconductors
          </li>
        </ul>
      </div>
    </section>

    <section>
      <h2 className={styles.subtitle}>On the web</h2>
      <div className={styles.section.concat(' ', styles.section_text)}>
        <ul className={globalStyles.list}>
          <li>
            <Link href="https://github.com/rauloliva">
              <a>@Github profile</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/raul-oliva-27208817b/">
              <a>@LinkedIn profile</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/raul_oliva_cas/">
              <a>@Instagram profile</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default Bio;
