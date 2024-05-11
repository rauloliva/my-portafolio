import Repository from './Repository';
import style from '../styles/modules/portafolio.module.scss';
import globalStyle from '../styles/modules/global.module.scss';
import Loading from './Loading';
import { getRepos } from '../js/repos';
import { useEffect, useState } from 'react';
import { ScrollShadow } from '@nextui-org/react';

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
          <h1 className={globalStyle.title}>
            My <span className={style.portafolio__occupation}>Repositories</span>
          </h1>

          <ScrollShadow hideScrollBar className="h-[410px]">
            <div className={style.portafolio__repos}>{githubRepos}</div>
          </ScrollShadow>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PortafolioView;
