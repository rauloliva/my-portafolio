import style from '../../styles/modules/title.module.scss';

const Title = ({ children }) => {
  const [text, highlight] = children.split(' ');

  return (
    <h1 className={style.title}>
      {text} <span className={style.title__highlight}>{highlight}</span>
    </h1>
  );
};

export default Title;
