import React from "react";
import tw from "tailwind-styled-components";

export default function DetailBox({
  title,
  desc,
}: {
  title: string;
  desc: string | number;
}) {
  return (
    <div>
      <BoxTitle>{title}</BoxTitle>
      <BoxBody>{desc}</BoxBody>
    </div>
  );
}

const BoxTitle = tw.h4`
  text-white	
`;

const BoxBody = tw.p`
  text-2xl
`;
