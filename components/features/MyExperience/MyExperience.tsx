'use client';

import { ScrollShadow } from '@nextui-org/react';

import Title from '@/components/common/Title/Title';
import Position from '@/components/layouts/Position/Position';
import Skills from '@/components/layouts/Skills';

import style from './experience.module.scss';

const MyExperience = () => {
  return (
    <>
      <section className={style.experience__left}>
        <Title>My Experience</Title>

        <ScrollShadow hideScrollBar className="h-[500px]">
          <Position />
        </ScrollShadow>
      </section>
      <section className={style.experience__right}>
        <ScrollShadow hideScrollBar className="h-[450px]">
          <Skills />
        </ScrollShadow>
      </section>
    </>
  );
};

export default MyExperience;
