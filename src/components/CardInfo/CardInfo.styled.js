import styled from "styled-components";

import { media } from "../../styles/media";

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 80px;
  z-index: 1;
`;

export const Title = styled.div`
  padding-top: 60px;
  font-size: 36px;

  ${media.tablet`
    padding-top: 120px;
    font-size: 50px;
  `}
`;

export const SubTitle = styled.div`
  max-width: 335px;
  margin-top: 20px;
  font-size: 20px;
  font-family: "MontserratLight";

  ${media.tablet`
    max-width: 720px;
    font-size: 30px;
  `}

  ${media.desktop`
    max-width: 1020px;
  `}
`;

export const Card = styled.img`
  margin-top: 50px;
  max-width: 335px;
  margin-bottom: 20px;
  border-radius: 10px;

  ${media.tablet`
    max-width: 550px;
  `}

  ${media.desktop`
    max-width: 400px;
    margin-bottom: 0px;
  `}
`;
