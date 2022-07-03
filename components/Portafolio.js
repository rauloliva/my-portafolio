import styles from '../styles/modules/portafolio.module.scss';
import RepoItem from './RepoItem';

const Portafolio = props => {
  const repositories = props.repositories;
  const repo_boxes = repositories.map(repo => {
    // ignoring special repository
    if (repo.id != 355990194) {
      return <RepoItem key={repo.id} repo={repo} theme={props.theme} />;
    }
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>My Works ({repositories.length})</h2>
      <section className={styles.repos_container}>{repo_boxes}</section>
    </div>
  );
};

export default Portafolio;
