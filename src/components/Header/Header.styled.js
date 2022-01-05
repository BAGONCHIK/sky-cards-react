import styled from "styled-components";
import { headerHeight } from "../../styles/sizes";
import { media } from "../../styles/media";

export const Root = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${headerHeight}px;
  background: black;
  box-shadow: 0px -5px 5px -5px rgba(255, 255, 255, 0.6) inset;
  z-index: 1000;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 30px;
  font-family: "MontserratSemiBold";
  color: white;
`;

export const Logo = styled.img`
  position: absolute;
  right: 10px;
  width: ${headerHeight}px;
  height: ${headerHeight}px;
`;

export const Hamburger = styled.div`
  height: ${headerHeight}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 35px;
  cursor: pointer;
  margin-left: 20px;

  & > span {
    display: block;
    background: white;
    width: 100%;
    height: 2px;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  & > span:nth-child(1) {
    width: 100%;
  }

  & > span:nth-child(2) {
    width: 47%;
  }

  & > span:nth-child(3) {
    width: 78%;
  }
`;
