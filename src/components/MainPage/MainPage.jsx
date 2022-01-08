import React from "react";
import Welcome from "../Welcome";
import CardInfo from "../CardInfo";
import Gallary from "../Gallary/Gallary";
import Feedback from "../Feedback/Feedback";

import * as S from "./MainPage.styled";

const MainPage = () => {
  return (
    <S.Root>
      <Welcome />
      <CardInfo />
      <Gallary />
      <Feedback />
    </S.Root>
  );
};

export default MainPage;
