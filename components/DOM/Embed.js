import style from '../../styles/modules/embed.module.scss';

const Embed = ({ src }) => (
  <embed
    title="embeded-resume"
    src={src}
    type="application/pdf"
    className={style.embed}
  />
);

export default Embed;
