import styled from "styled-components";
import { media } from "../../styles/media";

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 60px;
  background: white;
  width: 470px;
  margin: 30px 0 50px 0px;
  border-radius: 20px;
  z-index: 1;
  overflow: hidden;
  border: 1px solid white;
  max-height: 700px;

  ${media.desktop`
    margin-left: 70px;
  `}
`;

export const Bg = styled.img`
  position: absolute;
  width: 470px;
  height: 100%;
  z-index: -1;
`;

export const Sky = styled.img`
  margin-top: 80px;
  max-width: 350px;
  border-radius: 50%;
`;

export const Content = styled.div`
  height: 80px;
  margin-top: 40px;
  font-size: 18px;
  color: white;
  overflow: hidden;
  text-align: center;
`;

export const Place = styled.div`
  height: 29px;
  overflow: hidden;
  margin-top: 10px;
  font-size: 24px;
  color: white;
`;

export const Date = styled.div`
  margin-top: 5px;
  padding-bottom: 20px;
  font-size: 18px;
  color: white;
`;

export const Time = styled.div`
  margin-top: 5px;
  font-size: 16px;
  color: white;
`;
