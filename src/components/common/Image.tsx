import Image from "next/image";
import React from "react";

interface IPros {
  src: string;
  alt: string;
  className?: string;
}

const ImageComponent: React.FC<IPros> = ({ src, alt, className }) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      height={0}
      width={0}
      unoptimized
    />
  );
};

export default ImageComponent;
