import React from "react";
import { images } from "../../assets/images";

import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Root>
      <S.Hamburger>
        <span />
        <span />
        <span />
      </S.Hamburger>
      <S.Title>SkyCards</S.Title>
      <S.Logo src={images.LogoNoBg} />
    </S.Root>
  );
};

export default Header;
