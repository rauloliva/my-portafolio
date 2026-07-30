import Image from 'next/image';
import style from './loading.module.scss';
import image from '@/img/spinner.gif';

const Loading = () => (
  <section className={style.loading}>
    <Image src={image} width="200" height="200" alt="Photo of Raul Oliva" />
  </section>
);

export default Loading;
