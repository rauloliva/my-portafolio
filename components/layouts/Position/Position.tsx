import styles from './position.module.scss';
import { EXPERIENCES } from '@/constants';

import Skill from '@/components/common/Skill/Skill';

const Position = () => {
  const output = EXPERIENCES.map(exp => {
    // construct the overview/bullets
    const overview = (
      <ul className={styles.position__overview}>
        {exp.overview.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    );

    // construct the list of skills
    const skills = <Skill content={exp.skills} />;

    const experience = (
      <article className={styles.position} key={exp.name}>
        <h5 className={styles.position__name}>{exp.name}</h5>
        <span className={styles.position__company}>{exp.company}</span>
        <span className={styles.position__date}>{exp.period}</span>
        <>
          {overview}
          {skills}
        </>
      </article>
    );

    return experience;
  });

  return <>{output}</>;
};

export default Position;
