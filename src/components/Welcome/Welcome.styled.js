import styled from "styled-components";
import { media } from "../../styles/media";
import { headerHeight } from "../../styles/sizes";
import Particles from "react-tsparticles";

export const Root = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: calc(100vh - ${headerHeight}px);
  overflow: hidden;
  z-index: -1;
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
  max-width: 335px;
  text-align: center;
  color: white;

  ${media.tablet`
    max-width: 550px;
  `}

  ${media.desktop`
    max-width: 700px;
  `}
`;

export const Title = styled.div`
  font-size: 60px;
  font-family: "MontserratSemiBold";

  ${media.tablet`
    font-size: 80px;
  `}
`;

export const SubTitle = styled.div`
  margin-top: 10px;
  font-size: 36px;

  ${media.tablet`
    font-size: 40px;
  `}

  ${media.desktop`
    margin-top: 0px;
    font-size: 50px;
  `}
`;

export const Text = styled.div`
  margin-top: 40px;
  font-size: 20px;
  font-family: "MontserratLight";

  ${media.tablet`
    font-size: 26px;
  `}
`;

export const MyParticles = styled(Particles)`
  position: absolute;
  z-index: 0;
`;
