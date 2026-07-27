import style from './portafolio.module.scss';
import Loading from '../../layouts/Loading/Loading';
import { ScrollShadow } from '@nextui-org/react';
import Title from '../../common/Title/Title';
import ArrowDown from '../../layouts/ArrowDown/ArrowDown';
import { useRepos } from '../../../hooks/useGithub';

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
