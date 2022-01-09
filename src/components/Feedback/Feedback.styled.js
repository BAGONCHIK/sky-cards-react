import styled from "styled-components";
import { media } from "../../styles/media";

export const Root = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 50px;
  z-index: 1;

  ${media.desktop`
    padding: 0 170px 50px 170px;
  `};
`;

export const Title = styled.div`
  padding-top: 60px;
  font-size: 36px;
  text-align: center;

  ${media.tablet`
    padding: 60px 0 20px 0;
    font-size: 50px;
  `}
`;
