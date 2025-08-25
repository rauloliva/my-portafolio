import style from '../styles/modules/repository.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { reposLangs } from './hooks/useGithub';

const Repository = ({ repo }) => {
  const repoName = repo.name.replace(/-/g, ' ').replace(/_/g, ' ');

  let repoLanguage = reposLangs[`${repo.id}`];

  return (
    <article className={style.repo}>
      <section className={style.repo_header}>
        <h3 className={style.repo_title}>{repoName}</h3>
        <section className={style.repo_header_actions}>
          <Image src={repoLanguage} width="20" height="20" alt="Java logo" />
          <small className={style.repo_lang}>{repo.language} | </small>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
            width="20"
            height="20"
            alt="Java logo"
          />
          <small className={style.repo_link}>
            <Link href={repo.html_url} passHref={true} target="_blank">
              Go to Repo
            </Link>
          </small>
        </section>
      </section>

      <section>
        <p className={style.repo_description}>{repo.description}</p>
      </section>
    </article>
  );
};

export default Repository;
