declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '@/styles/*' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.JPG' {
  const content: import('next/image').StaticImageData;
  export default content;
}