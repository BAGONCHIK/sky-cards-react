import React from "react";

import * as S from "./Example.styled";

const Example = ({ image }) => {
  return (
    <S.Root>
      <S.Radio>Выбрать</S.Radio>
      <S.Image src={image} />
    </S.Root>
  );
};

export default Example;
