import styles from './skill.module.scss';

import Expandible from '@/components/common/Expandible/Expandible';

interface SkillProps {
  content: string[];
}

const Skill = ({ content }: SkillProps) => {
  // construct the list of skills
  const skillList = content.map((skill, index) => (
    <li key={`${index}-${skill}`}>{skill}</li>
  ));

  return (
    <Expandible>
      <ul className={styles.skills}>{skillList}</ul>
    </Expandible>
  );
};

export default Skill;
