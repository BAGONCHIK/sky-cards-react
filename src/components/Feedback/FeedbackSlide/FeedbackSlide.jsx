import React from "react";

import * as S from "./FeedbackSlide.styled";

const FeedbackSlide = ({ avatar, info, content }) => {
  return (
    <S.Root>
      <S.Avatar src={avatar} alt="Клиент 1" />
      <S.InfoBlock>
        <S.CityName>{info}</S.CityName>
        <S.Content>{content}</S.Content>
      </S.InfoBlock>
    </S.Root>
  );
};

export default FeedbackSlide;
