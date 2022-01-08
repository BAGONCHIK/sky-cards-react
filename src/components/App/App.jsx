import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage";
// import ConstructorPage from "../ConstructorPage";

import * as S from "./App.styled";

const App = () => {
  return (
    <S.Root>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/home" component={MainPage} />
          {/* <Route path="/constructor" component={ConstructorPage} /> */}
        </Switch>
      </BrowserRouter>
      <Footer />
    </S.Root>
  );
};

export default App;
