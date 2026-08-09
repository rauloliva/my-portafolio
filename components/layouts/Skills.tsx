import styled from 'styled-components';

import { SKILLS } from '@/constants/index';

import Skill from '@/components/common/Skill/Skill';

const H6 = styled.h6`
  font-weight: bold;
`;

const Article = styled.article`
  margin-top: 1rem;
`;

const Skills = () => {
  const output = SKILLS.map((obj, index) => {
    const category = <H6>{obj.category}</H6>;

    const content = <Skill content={obj.content} />;

    return (
      <Article key={index}>
        {category}
        {content}
      </Article>
    );
  });

  return <>{output}</>;
};

export default Skills;
