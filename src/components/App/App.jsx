import React from "react";
import Welcome from "../Welcome";
import Header from "../Header";

import * as S from "./App.styled";
import Gallary from "../Gallary/Gallary";

const App = () => {
  return (
    <S.Root>
      <Header />
      <Welcome />
      <Gallary />
    </S.Root>
  );
};

export default App;
