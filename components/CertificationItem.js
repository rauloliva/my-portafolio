import styles from '../styles/modules/certifications.module.scss';
import Image from 'next/image';

import { useState } from 'react';
import Modal from './Modal';

const CertificationItem = props => {
  const reverse = props.isReversed ? styles.certifications_box_reverse : '';

  const { title, description, image, isReversed } = props;

  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);

  // constructing the Certification Item
  const image_wrapper = (
    <div className={styles.certifications_box_image}>
      <Image src={image} alt={title.concat(' certification image')} />
    </div>
  );

  const cert_info = (
    <div
      className={styles.certifications_box_info.concat(
        ' ',
        styles.certifications_box_info_text_dark
      )}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p className={styles.certifications_box_info_due_date}>March 2023</p>
    </div>
  );

  let output;
  if (isReversed) {
    output = (
      <>
        {cert_info}
        {image_wrapper}
      </>
    );
  } else {
    output = (
      <>
        {image_wrapper}
        {cert_info}
      </>
    );
  }

  return (
    <>
      <div
        className={styles.certifications_box.concat(
          ' ',
          props.bg_color,
          ' ',
          reverse
        )}
        onClick={() => openModal()}
      >
        {output}
      </div>
      {show ? <Modal image={image} setShow={setShow} /> : null}
    </>
  );
};

export default CertificationItem;
