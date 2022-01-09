import React from "react";

import * as S from "./Example.styled";

const Example = ({ image, onChangeBg, id }) => {
  return (
    <S.Root>
      <S.Radio onClick={() => onChangeBg(id)}>Выбрать</S.Radio>
      <S.Image src={image} />
    </S.Root>
  );
};

export default Example;
