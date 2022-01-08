import React from "react";
import Welcome from "../Welcome";
import Header from "../Header";
import CardInfo from "../CardInfo";

import * as S from "./App.styled";

const App = () => {
  return (
    <S.Root>
      <Header />
      <Welcome />
      <CardInfo />
    </S.Root>
  );
};

export default App;
