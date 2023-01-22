import { NodeChildInterface } from "@/interfaces/generics";
import React from "react";
import tw from "tailwind-styled-components";

export default function HeaderTitle({ children }: NodeChildInterface) {
  return <Title>{children}</Title>;
}

const Title = tw.h2`
  text-3xl font-bold mt-0 mb-6 text-center 
`;
