import Image from 'next/image';
import style from './loading.module.scss';

const Loading = () => (
  <section className={style.loading}>
    <Image 
      src="/img/spinner.gif" 
      width={200} 
      height={200}
      alt="Photo of Raul Oliva" 
      unoptimized
      />
  </section>
);

export default Loading;
