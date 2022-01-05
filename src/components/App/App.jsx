import React from "react";
import Welcome from "../Welcome";
import Header from "../Header";

import * as S from "./App.styled";

const App = () => {
  return (
    <S.Root>
      <Header />
      <Welcome />
    </S.Root>
  );
};

export default App;
