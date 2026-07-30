interface LangLogo {
  img: string;
  alt: string;
}

const langLogos: Record<string, LangLogo> = {
  java: {
    img: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    alt: 'Java Logo',
  },
  javascript: {
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    alt: 'JavaScript Logo',
  },
  python: {
    img: 'https://cdn-icons-png.flaticon.com/512/1822/1822899.png',
    alt: 'Python Logo',
  },
  php: {
    img: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
    alt: 'PHP Logo',
  },
  html: {
    img: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    alt: 'HTML Logo',
  },
  github: {
    img: 'https://cdn-icons-png.flaticon.com/512/3291/3291695.png',
    alt: 'Github Logo',
  },
};

export default langLogos;
