import style from '../styles/modules/repository.module.scss';
import Link from 'next/link';
import ImageLogo from './DOM/ImageLogo';

const Repository = ({ repo }) => {
  const repoName = repo.name.replace(/-/g, ' ').replace(/_/g, ' ');

  const repoLang = repo.language.toLowerCase();

  return (
    <article className={style.repo}>
      <section className={style.repo_header}>
        <h3 className={style.repo_title}>{repoName}</h3>
        <section className={style.repo_header_actions}>
          <ImageLogo language={repoLang} />

          <small className={style.repo_lang}>{repo.language} | </small>

          <ImageLogo language="github" />

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
