import React from "react";

import * as S from "./InfoBlock.styled";

const InfoBlock = ({ title, content, margin }) => {
  return (
    <S.Root margin={margin}>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.Root>
  );
};

export default InfoBlock;
