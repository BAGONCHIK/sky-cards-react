import React from "react";
import { images } from "../../assets/images";
import { particlesConfig } from "../../styles/helpers";

import * as S from "./ConstructorPage.styled";

const ConstructorPage = () => {
  return (
    <S.Root>
      <S.MyParticles options={particlesConfig} />
      <S.BgImage src={images.DarkSpace} />
    </S.Root>
  );
};

export default ConstructorPage;
