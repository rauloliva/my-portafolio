import { FaArrowDownLong } from 'react-icons/fa6';
import style from '../styles/modules/arrow.module.scss';

const ArrowDown = () => (
  <div className={style.arrow__container}>
    <span className={style.arrow__box}>
      <FaArrowDownLong />
    </span>
  </div>
);

export default ArrowDown;
