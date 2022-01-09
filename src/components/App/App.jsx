import React, { useCallback, useEffect } from "react";
import Welcome from "../Welcome";
import Header from "../Header";
import CardInfo from "../CardInfo";
import { AnimatePresence } from "framer-motion";
import { useToggle } from "../../utils/hooks/useToggle";

import * as S from "./App.styled";
import Gallary from "../Gallary";
import Feedback from "../Feedback";
import Footer from "../Footer";
import Nav from "../Nav";

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
      <Header onMenuClick={toggleNav} />
      <AnimatePresence>
        {isNavOpen && <Nav onClose={toggleNav} />}
      </AnimatePresence>
      <Welcome />
      <CardInfo />
      <Gallary />
      <Feedback />
      <Footer />
    </S.Root>
  );
};

export default App;
