import styled from "styled-components";
import { headerHeight } from "../../styles/sizes";
import Particles from "react-tsparticles";
import { media } from "../../styles/media";

export const Root = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding-top: ${headerHeight}px;
  overflow: hidden;
`;

export const MyParticles = styled(Particles)`
  position: absolute;
  z-index: 0;
`;

export const BgImage = styled.img`
  position: absolute;
  height: 100%;
  z-index: -1;

  ${media.mediumDesktop`
    width: 100%;
  `}
`;
