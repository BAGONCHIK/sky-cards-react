import React from "react";
import { images } from "../../assets/images";
import Form from "../../components/Form";
import Preview from "../../components/Preview";
import { particlesConfig } from "../../styles/helpers";

import * as S from "./ConstructorPage.styled";

const ConstructorPage = () => {
  return (
    <S.Root>
      <S.MyParticles options={particlesConfig} />
      <S.BgImage src={images.DarkSpace} />
      <Form />
      <Preview />
    </S.Root>
  );
};

export default ConstructorPage;
