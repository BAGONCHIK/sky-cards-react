import React from "react";
import Welcome from "../Welcome";
import Header from "../Header";
import CardInfo from "../CardInfo";

import * as S from "./App.styled";
import Gallary from "../Gallary/Gallary";
import Feedback from "../Feedback/Feedback";

const App = () => {
  return (
    <S.Root>
      <Header />
      <Welcome />
      <CardInfo />
      <Gallary />
      <Feedback />
    </S.Root>
  );
};

export default App;
