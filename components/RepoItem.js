import styles from '../styles/modules/portafolio.module.scss';
import Image from 'next/image';

// programming langs logos
import html_logo from '../img/html.png';
import java_logo from '../img/java.png';
import php_logo from '../img/php.png';
import javascript_logo from '../img/javascript.png';
import python_logo from '../img/python.png';
import undefined_image from '../img/undefined.png';

const RepoItem = props => {
  const repo = props.repo;
  const lan_image = get_language_logo(repo.language);
  const repo_name = repo.name.replace(/-/g, ' ').replace(/_/g, ' ');

  const bg_color =
    props.theme == 'light' ? styles.repo_light : styles.repo_dark;

  return (
    <div className={styles.repo.concat(' ', bg_color)}>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <div className={styles.repo_image}>
          <Image src={lan_image} alt="Language Logo" />
        </div>
        <div
          className={styles.repo_info.concat(' ', styles.repo_info_text_dark)}
        >
          <h3>{repo_name}</h3>
          <p>{repo.description}</p>
        </div>
      </a>
    </div>
  );
};

const get_language_logo = language => {
  switch (language) {
    case 'PHP':
      return php_logo;

    case 'Java':
      return java_logo;

    case 'JavaScript':
      return javascript_logo;

    case 'HTML':
      return html_logo;

    case 'Python':
      return python_logo;

    default:
      return undefined_image;
  }
};

export default RepoItem;
