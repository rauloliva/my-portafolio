import style from '../styles/modules/loading.module.scss';
import image from '../img/spinner.gif';
import Image from 'next/image';

const Loading = () => {
  return (
    <section className={style.loading}>
      <Image src={image} width="200" height="200" alt="Photo of Raul Oliva" />
    </section>
  );
};

export default Loading;
