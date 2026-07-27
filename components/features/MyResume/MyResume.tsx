import Title from '@/components/common/Title/Title';
import Embed from '@/components/common/Embed/Embed';

import style from './resume.module.scss';

const MyResume = () => (
  <section className={style.experience}>
    <Title>My Resume</Title>

    <Embed src="/RaulAdrianOlivaCastillo - Resume.pdf" />
  </section>
);
export default MyResume;
