import React from "react";
import Welcome from "../../components/Welcome";
import CardInfo from "../../components/CardInfo";
import Gallary from "../../components/Gallary/Gallary";
import Feedback from "../../components/Feedback/Feedback";

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
