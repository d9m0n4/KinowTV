import clsx from 'clsx';
import React from 'react';

interface IAvatar {
  src: string;
  alt: string;
  w?: string;
  h?: string;
  className?: string;
}

const PersonAvatar: React.FC<IAvatar> = ({ src, alt, w, h, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(`block object-cover`, w ? w : 'w-32', h ? h : 'h-32', className)}
    />
  );
};

export default PersonAvatar;
