import React from "react";
import Welcome from "../../components/Welcome";
import CardInfo from "../../components/CardInfo";

import * as S from "./MainPage.styled";
import Gallary from "../../components/Gallary";
import Feedback from "../../components/Feedback";

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
