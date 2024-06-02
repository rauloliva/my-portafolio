import Repository from './Repository';
import style from '../styles/modules/portafolio.module.scss';
import Loading from './Loading';
import { getRepos } from '../js/repos';
import { useEffect, useState } from 'react';
import { ScrollShadow } from '@nextui-org/react';
import Title from './DOM/Title';
import ArrowDown from './ArrowDown';

const PortafolioView = () => {
  const [repos, setRepos] = useState([]);

  const fetchRepose = async () => {
    const repositories = await getRepos();
    setRepos(repositories);
  };

  useEffect(() => {
    fetchRepose();
  });

  const githubRepos = repos.map(repo => (
    <Repository key={repo.id} repo={repo} />
  ));

  return (
    <>
      {repos.length > 0 ? (
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
