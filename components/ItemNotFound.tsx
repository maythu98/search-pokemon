import Image from "next/image";
import React from "react";
import pic from "../public/notfound.png";
import Container from "./Ui/Container";
import tw from "tailwind-styled-components";

interface NotFoundProps {
  name: string;
}
export default function ItemNotFound({ name }: NotFoundProps) {
  return (
    <Container>
      <ImageWrapper>
        <Image src={pic} alt="Not Found Image" width={500} height={500} />
      </ImageWrapper>
      <Text>
        There is no Pokemon : <b> {name}! </b>
      </Text>
    </Container>
  );
}

const ImageWrapper = tw.div`
  flex justify-center my-8
`;

const Text = tw.h3`
  text-2xl
`;
