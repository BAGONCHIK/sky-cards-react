import React from "react";
import { images } from "../../assets/images";

import * as S from "./Gallary.styled";

const Gallary = () => {
  return (
    <S.Root>
      <S.Slider>
        <S.Photo src={images.Card3} />
        <S.Photo src={images.Card4} />
        <S.Photo src={images.Card5} />
        <S.Photo src={images.Card6} />
        <S.Photo src={images.Card2} />
        <S.Photo src={images.Card7} />
        <S.Photo src={images.Card9} />
      </S.Slider>
    </S.Root>
  );
};

export default Gallary;
