import { FC } from "react";

export type Props = {
  webp: string;
  jpg: string;
  alt: string;
  w: string;
  h: string;
};

const Image: FC<Props> = ({ webp, jpg, alt, w, h }) => {
  return (
    <picture>
      <source type="image/webp" srcSet={webp} />
      <source type="image/jpeg" srcSet={jpg} />
      <img src={jpg} alt={alt} width={w} height={h} />
    </picture>
  );
};

export default Image;
