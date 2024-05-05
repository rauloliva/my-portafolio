import Repository from './Repository';
import style from '../styles/modules/portafolio.module.scss';

const PortafolioView = props => {
  const repositories = props.repositories;

  const githubRepos = repositories.map(
    repo => repo.id != 355990194 && <Repository key={repo.id} repo={repo} />
  );

  return (
    <>
      <section className={style.portafolio}>
        <h1>My <span className={style.portafolio__occupation}>Repositories</span></h1>
        <p>Click on the Github icon to go to the repository</p>

        <div className={style.portafolio__repos}>{githubRepos}</div>
      </section>
    </>
  );
};

export default PortafolioView;
