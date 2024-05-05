import style from '../styles/modules/repository.module.scss';
import Image from 'next/image';

const Repository = props => {
  const { repo } = props;
  const repoName = repo.name.replace(/-/g, ' ').replace(/_/g, ' ');

  return (
    <div className={style.repository}>
      <h3 className={style.repository__title}>{repoName}</h3>
      <p>{repo.description}</p>
      <p className={style.repository__link}>
        <a
          href={repo.html_url}
          className={style.repository__link_icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://logo.clearbit.com/github.com"
            width="30"
            height="30"
            alt="Github Icon"
          />
        </a>
      </p>
    </div>
  );
};

export default Repository;
