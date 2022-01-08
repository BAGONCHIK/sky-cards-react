import styled from "styled-components";
import { media } from "../../../styles/media";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 60px 50px 60px;
  text-align: center;

  ${media.tablet`
    flex-direction: row;
    text-align: left;
  `}
`;

export const CityName = styled.div`
  margin-top: 10px;
  font-family: "MontserratSemiBold";
  font-size: 20px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 10px;
  font-family: "MontserratLight";
  font-size: 16px;
`;

export const Avatar = styled.img``;
