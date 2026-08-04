'use client';

import Title from '@/components/common/Title/Title';
import Embed from '@/components/common/Embed/Embed';

import { useResumeFile } from '@/hooks/useGithub';

import style from './resume.module.scss';

const MyResume = () => {
  const resume = useResumeFile();

  return (
    <section className={style.experience}>
      <Title>My Resume</Title>

      <Embed src={resume || '/RaulAdrianOlivaCastillo - Resume.pdf'} />
    </section>
  );
};

export default MyResume;
