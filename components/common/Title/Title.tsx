import style from './title.module.scss';

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps) => {
  const [text, highlight] = children.split(' ');

  return (
    <h1 className={style.title}>
      {text} <span className={style.title__highlight}>{highlight}</span>
    </h1>
  );
};

export default Title;
