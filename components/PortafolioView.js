import style from '../styles/modules/portafolio.module.scss';
import Loading from './Loading';
import { ScrollShadow } from '@nextui-org/react';
import Title from './DOM/Title';
import ArrowDown from './ArrowDown';
import { useRepos } from './hooks/useGithub';

const PortafolioView = () => {
  const githubRepos = useRepos()

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
