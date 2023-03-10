import React from "react";
import tw from "tailwind-styled-components";

export default function Footer() {
  return (
    <FooterDiv>
      Developed by
      <AuthorLink
        href="https://github.com/maythu98"
        target="_blank"
        rel="noopener noreferrer"
      >
        May Thu
      </AuthorLink>
    </FooterDiv>
  );
}

const FooterDiv = tw.div`
    mt-6 text-slate-400 text-center
`;

const AuthorLink = tw.a`
    pl-1 text-blue-600/100
`;
