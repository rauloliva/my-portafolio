import Image from 'next/image';
import photo from '../img/contact_photo.jpg';
import style from '../styles/modules/contact.module.scss';

const ContactView = () => {
  return (
    <>
      <section className={style.contact__left}>
        <h1 className={style.contact__left_title}>
            Contact <span className={style.contact__left_occupation}>Me</span>
        </h1>

        <p className={style.contact__left_description}>
            Feel free to use either one of these social media to get in touch with me.
        </p>
      </section>

      <section className={style.contact__right}>
        <div className={style.contact__image}>
          <Image
            src={photo}
            width="300"
            height="350"
            alt="Photo of Raul Oliva"
          />
        </div>
      </section>
    </>
  );
};

export default ContactView;
