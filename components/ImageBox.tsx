import Image from "next/image";
import React from "react";

export default function ImageBox({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <div className="w-100 flex justify-center">
      <Image
        className="rounded-t-lg"
        src={image}
        width={350}
        height={350}
        alt={alt}
      />
    </div>
  );
}
