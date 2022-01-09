import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useToggle } from "../../utils/hooks/useToggle";
import { AnimatePresence } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer/Footer";
import MainPage from "../../pages/MainPage";
import ConstructorPage from "../../pages/ConstructorPage";
import Nav from "../Nav";

import * as S from "./App.styled";

const App = () => {
  const [isNavOpen, toggleNav] = useToggle(false);
  const handleDocumentClick = useCallback(() => {
    toggleNav();
  }, [toggleNav]);

  useEffect(() => {
    if (isNavOpen) {
      document.getElementById("layout-content")?.classList.add("disable-body");
      document
        .getElementById("layout-content-wrapper")
        ?.addEventListener("click", handleDocumentClick);
    } else {
      document
        .getElementById("layout-content")
        ?.classList.remove("disable-body");
      document
        .getElementById("layout-content-wrapper")
        ?.removeEventListener("click", handleDocumentClick);
    }
  }, [isNavOpen, handleDocumentClick]);
  return (
    <S.Root>
      <BrowserRouter>
        <Header onMenuClick={toggleNav} />
        <AnimatePresence>
          {isNavOpen && <Nav onClose={toggleNav} />}
        </AnimatePresence>
        <div id="layout-content-wrapper">
          <div id="layout-content">
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/home" component={MainPage} />
              <Route path="/constructor" component={ConstructorPage} />
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </S.Root>
  );
};

export default App;
