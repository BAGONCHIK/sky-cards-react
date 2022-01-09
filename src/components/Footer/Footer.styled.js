import styled from "styled-components";
import { media } from "../../styles/media";

export const Root = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  z-index: 1000;
`;

export const FooterLogo = styled.img`
  margin-top: 59px;
  width: 152px;
  height: 152px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  ${media.tablet`
    flex-direction: row;
  `}
`;

export const Button = styled.a`
  font-size: 16px;
  line-height: 20px;
  color: white;
  margin-bottom: 20px;
  text-decoration: none;
  outline: none;

  ${media.tablet`
    margin-right: 12px;
  `}
`;

export const BigText = styled.div`
  max-width: 299px;
  margin-top: 20px;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  color: white;

  ${media.tablet`
    margin-top: 17px;
    max-width: 737px;
  `}

  ${media.desktop`
    max-width: 803px;
  `}
`;

export const Copyright = styled.div`
  margin-top: 35px;
  padding-bottom: 41px;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: white;

  ${media.tablet`
    padding-bottom: 77px;
  `}
`;
