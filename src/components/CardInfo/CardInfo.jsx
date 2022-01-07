import React from "react";

import { images } from "../../assets/images";
import { cardInfoBlocks } from "../../styles/helpers";
import InfoBlock from "./InfoBlock";
import * as S from "./CardInfo.styled";

const CardInfo = () => {
  return (
    <S.Root>
      <S.Title>Что же такое звёздная карта?</S.Title>
      <S.SubTitle>
        Делаем картины с точным расположением звёзд в момент особенного для Вас
        события
      </S.SubTitle>
      <S.Card src={images.Card1} />
      {cardInfoBlocks.map((info, i) => (
        <InfoBlock
          title={info.title}
          content={info.content}
          margin={info.margin}
          key={i}
        />
      ))}
    </S.Root>
  );
};

export default CardInfo;
