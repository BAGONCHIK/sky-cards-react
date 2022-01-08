import styled from "styled-components";
import { headerHeight } from "../../styles/sizes";
import Particles from "react-tsparticles";
import { media } from "../../styles/media";

export const Root = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: calc(100vh - ${headerHeight}px);
  overflow: hidden;
  z-index: -1;
`;

export const MyParticles = styled(Particles)`
  position: absolute;
  z-index: 0;
`;

export const BgImage = styled.img`
  position: absolute;
  height: 100vh;
  z-index: -1;

  ${media.bigDesktop`
    width: 100%;
  `}
`;
