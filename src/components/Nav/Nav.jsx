import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../Header";

import * as S from "./Nav.styled";

import { items } from "./items";

const commonTransitionSettings = {
  ease: "easeIn",
  duration: 0.3,
};

/* TODO Don't render if same route */
const Nav = ({ onClose }) => {
  const rootAnimation = useAnimation();
  const itemAnimation = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await rootAnimation.start({ opacity: 1 });

      await itemAnimation.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15 },
      }));
    };

    animate();
  });

  return (
    <S.Root
      className="nav"
      animate={rootAnimation}
      initial={{ opacity: 0 }}
      exit={{ y: "-100%" }}
      transition={commonTransitionSettings}
    >
      <Header onMenuClick={onClose} />
      <S.Cross onClick={onClose}>
        <motion.span
          animate={{ rotate: 45 }}
          transition={{
            ...commonTransitionSettings,
            delay: 0.2,
          }}
        />
        <motion.span
          animate={{ rotate: -45 }}
          transition={{
            ...commonTransitionSettings,
            delay: 0.2,
          }}
        />
      </S.Cross>
      <S.NavItems>
        {items.map(({ title, to }, i) => (
          <S.SecondaryNavItem
            custom={i}
            initial={{ opacity: 0, y: -25 }}
            animate={itemAnimation}
            key={title}
            onClick={onClose}
          >
            <a href={to}>{title}</a>
          </S.SecondaryNavItem>
        ))}
      </S.NavItems>
    </S.Root>
  );
};

export default Nav;
