import styles from '../styles/modules/modal.module.scss';
import Image from 'next/image';

const Modal = props => (
  <div className={styles.modal_container}>
    <Image
      onClick={() => props.setShow(false)}
      src={props.image}
      alt="Certificate image bigger"
    />
  </div>
);

export default Modal;
