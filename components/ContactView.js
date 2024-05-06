import Image from 'next/image';
import photo from '../img/contact_photo.jpg';
import FacebookIcon from '../img/icons/facebook-icon.svg';
import LinkedinIcon from '../img/icons/linkedin-icon.svg';
import InstagramIcon from '../img/icons/instagram-icon.svg';
import EmailIcon from '../img/icons/email-icon.svg';
import style from '../styles/modules/contact.module.scss';

const ContactView = () => (
  <>
    <section className={style.contact__left}>
      <h1 className={style.contact__left_title}>
        Contact <span className={style.contact__left_occupation}>Me</span>
      </h1>

      <p className={style.contact__left_description}>
        Feel free to use either one of these social media to get in touch with
        me.
      </p>

      <div className={style.contact__left_social}>
        <a
          href="https://www.linkedin.com/in/raul-oliva-27208817b/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={LinkedinIcon}
            width="40"
            height="40"
            alt="Linkedin Icon"
          />
        </a>

        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Image
            src={FacebookIcon}
            width="40"
            height="40"
            alt="Facebook Icon"
          />
        </a>

        <a
          href="https://www.instagram.com/raul_oliva_cas/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={InstagramIcon}
            width="40"
            height="40"
            alt="Instagram Icon"
          />
        </a>

        <a
          href="mailto:oliva.raul12@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={EmailIcon} width="40" height="40" alt="Email Icon" />
        </a>
      </div>
    </section>

    <section className={style.contact__right}>
      <div className={style.contact__image}>
        <Image src={photo} width="300" height="350" alt="Photo of Raul Oliva" />
      </div>
    </section>
  </>
);

export default ContactView;
