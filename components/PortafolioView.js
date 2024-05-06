import Repository from './Repository';
import style from '../styles/modules/portafolio.module.scss';
import Loading from './Loading';
import { getRepos } from '../js/repos';
import { useEffect, useState } from 'react';

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
          <h1>
            My <span className={style.portafolio__occupation}>Repositories</span>
          </h1>
          <p>Click on the Github icon to go to the repository</p>

          <div className={style.portafolio__repos}>{githubRepos}</div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PortafolioView;
