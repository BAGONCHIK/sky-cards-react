import styled from "styled-components";
import { media } from "../../../styles/media";

export const Root = styled.div`
  margin-top: 30px;
  max-width: 330px;

  ${media.tablet`
    max-width: 500px;
  `}

  ${media.desktop`
    max-width: 280px;
    position: absolute;
    ${(props) => `margin: ${props.margin}`}
  `}
`;

export const Title = styled.div`
  font-family: "MontserratSemiBold";
  font-size: 20px;
`;

export const Content = styled.div`
  font-family: "MontserratLight";
  font-size: 16px;
`;
