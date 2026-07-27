import style from './embed.module.scss';

interface EmbedProps {
  src: string
}

const Embed = ({ src }: EmbedProps) => (
  <embed
    title="embeded-resume"
    src={src}
    type="application/pdf"
    className={style.embed}
  />
);

export default Embed;
