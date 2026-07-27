import style from './resume.module.scss';
import Title from '../../common/Title/Title';
import Embed from '../../common/Embed/Embed';

const MyResume = () => (
  <section className={style.experience}>
    <Title>My Resume</Title>

    <Embed src="/RaulAdrianOlivaCastillo - Resume.pdf" />
  </section>
);
export default MyResume;
