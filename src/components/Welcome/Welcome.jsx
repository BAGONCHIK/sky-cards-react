import React from "react";
import { images } from "../../assets/images";
import { particlesConfig } from "../../styles/helpers";

import * as S from "./Welcome.styled";

const Welcome = () => {
  return (
    <S.Root>
      <S.MyParticles options={particlesConfig} />
      <S.BgImage src={images.DarkSpace} />
      <S.Content>
        <S.Title>SkyCards</S.Title>
        <S.SubTitle>Карты звёздного неба</S.SubTitle>
        <S.Text>
          Делаем картины с точным расположением звёзд в момент особенного для
          вас события
        </S.Text>
        <S.CreateButton to="/constructor">Создать свой дизайн</S.CreateButton>
      </S.Content>
    </S.Root>
  );
};

export default Welcome;
