import style from '../styles/modules/resume.module.scss';
import Title from './DOM/Title';
import Embed from './DOM/Embed';

const MyResume = () => (
  <section className={style.experience}>
    <Title>My Resume</Title>

    <Embed src="/RaulAdrianOlivaCastillo - Resume.pdf" />
  </section>
);
export default MyResume;
