import styled, { css } from "styled-components";
import { Link as AppLink } from "react-router-dom";
import { motion } from "framer-motion";
import { headerHeight } from "../../styles/sizes";
import { media } from "../../styles/media";
import { size } from "polished";

const position = css`
  position: fixed;
  top: 0;
  left: 0;
  ${size(`calc(200px + ${headerHeight}px)`, "100%")};
`;

export const Root = styled(motion.div)`
  z-index: 99999;
  background: black;
  box-shadow: 0px 10px 30px rgba(19, 23, 31, 0.1);
  ${position};
`;

export const Cross = styled.div`
  position: absolute;
  top: 5px;
  left: 16px;
  z-index: 99999;
  cursor: pointer;
  background: black;

  ${size(40)}

  & > span {
    content: "";
    position: absolute;
    left: 50%;
    background-color: white;
    display: inline-block;

    ${size("100%", 2)}
  }

  ${media.desktop`
    left: 15px;
  `}
`;

const NavItem = styled(motion.li)`
  position: relative;
  width: fit-content;
`;

export const SecondaryNavItem = styled(NavItem)`
  font-family: "MontserratSemiBold";
  font-size: 22px;
  line-height: 26px;
  color: white;

  margin-bottom: 14px;

  &:hover {
    color: #c192ff;
    background: linear-gradient(#c192ff 1.31%, #6a8dff 99.97%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Link = styled(AppLink)`
  position: absolute;
  top: 0;
  left: 0;

  ${size("100%")}
`;

export const NavItems = styled.ul`
  position: absolute;
  bottom: 5%;
  right: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  z-index: 12;
  top: calc(44px + ${headerHeight}px);
  left: 64px;

  ${media.desktop`
    left: 88px;
  `}
`;
