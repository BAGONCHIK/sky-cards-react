import styled from "styled-components";
import { media } from "../../styles/media";
import { headerHeight } from "../../styles/sizes";

export const Root = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: calc(100vh - ${headerHeight}px);
  overflow: hidden;
`;

export const BgImage = styled.img`
  position: absolute;
  height: 100vh;
  z-index: -1;

  ${media.bigDesktop`
    width: 100%;
  `}
`;

export const Content = styled.div`
  margin: auto;
  max-width: 700px;
  text-align: center;
  color: white;
`;

export const Title = styled.div`
  font-size: 80px;
  font-family: "MontserratSemiBold";
`;

export const SubTitle = styled.div`
  font-size: 50px;
`;

export const Text = styled.div`
  margin-top: 40px;
  font-size: 26px;
  font-family: "MontserratLight";
`;
