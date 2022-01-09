import React from "react";
import { images } from "../../assets/images";

import * as S from "./Header.styled";

const Header = ({ onMenuClick }) => {
  return (
    <S.Root>
      <S.Hamburger onClick={onMenuClick}>
        <span />
        <span />
        <span />
      </S.Hamburger>
      <S.MyLink to="/">
        <S.Title>SkyCards</S.Title>
      </S.MyLink>
      <S.Logo src={images.LogoNoBg} />
    </S.Root>
  );
};

export default Header;
