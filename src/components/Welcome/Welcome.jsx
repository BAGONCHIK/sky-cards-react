import React from "react";
import { images } from "../../assets/images";
import Particles from "react-tsparticles";

import * as S from "./Welcome.styled";

const Welcome = () => {
  return (
    <S.Root>
      <Particles
        options={{
          particles: {
            number: {
              value: 30,
            },
            color: {
              value: "#fff",
            },
            opacity: {
              value: 0.7,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 0.8,
            },
          },
        }}
      />
      <S.BgImage src={images.DarkSpace} />
      <S.Content>
        <S.Title>SkyCards</S.Title>
        <S.SubTitle>Карты звёздного неба</S.SubTitle>
        <S.Text>
          Делаем картины с точным расположением звёзд в момент особенного для
          вас события
        </S.Text>
      </S.Content>
    </S.Root>
  );
};

export default Welcome;
