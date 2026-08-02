'use client';

import { ScrollShadow } from '@nextui-org/react';

import Loading from '@/components/layouts/Loading/Loading';
import Title from '@/components/common/Title/Title';
import ArrowDown from '@/components/layouts/ArrowDown/ArrowDown';

import style from './portafolio.module.scss';

import { useRepos } from '@/hooks/useGithub';

const PortafolioView = () => {
  const githubRepos = useRepos();

  return (
    <>
      {githubRepos.length > 0 ? (
        <section className={style.portafolio}>
          <Title>My Repositories</Title>

          <ScrollShadow hideScrollBar className="h-[410px]">
            <div className={style.portafolio__repos}>{githubRepos}</div>
          </ScrollShadow>

          <ArrowDown />
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PortafolioView;
