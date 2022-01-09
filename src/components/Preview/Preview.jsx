import React from "react";
import { useSelector } from "react-redux";
import { ExampleBgs } from "../../styles/helpers";
import {
  bgSelector,
  contentSelector,
  placeSelector,
  timeSelector,
  skySelector,
  dateSelector,
} from "../../models/form/selectors";

import { images } from "../../assets/images";

import * as S from "./Preview.styled";

const Preview = () => {
  const bgImage = useSelector(bgSelector);
  const sky = useSelector(skySelector);
  const content = useSelector(contentSelector);
  const place = useSelector(placeSelector);
  const time = useSelector(timeSelector);
  const date = useSelector(dateSelector);
  return (
    <S.Root>
      <S.Bg src={ExampleBgs[bgImage].url} />
      <S.Sky src={sky || images.DefaultSky} />
      <S.Content>{content}</S.Content>
      <S.Place>{place}</S.Place>
      <S.Time>{time}</S.Time>
      <S.Date>{date}</S.Date>
    </S.Root>
  );
};

export default Preview;
