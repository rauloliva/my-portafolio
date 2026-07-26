import Image from 'next/image';
import langLogos from '../utils/logos'

interface LanguageProps {
  language: string
}

const ImageLogo = ({ language }: LanguageProps) => {
  const { img, alt } = langLogos[language]

  return <Image src={img} width="20" height="20" alt={alt} />;
};

export default ImageLogo;
