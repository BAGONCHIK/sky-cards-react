import styled from "styled-components";
import { media } from "../../styles/media";
import Particles from "react-tsparticles";
import { Link } from "react-router-dom";

export const Root = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const BgImage = styled.img`
  position: absolute;
  height: 100vh;
  z-index: -1;

  ${media.mediumDesktop`
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

export const CreateButton = styled(Link)`
  position: relative;
  z-index: 9999;
  margin-top: 40px;
  text-decoration: none;
  text-align: center;
  outline: none;
  display: inline-block;
  padding: 15px 25px;
  border-radius: 20px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  font-size: 24px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
    cursor: pointer;
  }
`;
