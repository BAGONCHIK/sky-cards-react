import styled from "styled-components";
import { images } from "../../assets/images";
import { media } from "../../styles/media";

export const Root = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${images.DarkSpace});
  padding-bottom: 30px;
  z-index: 1;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 30px 0 30px 0;
  font-size: 36px;
  color: white;

  ${media.tablet`
    padding: 30px 0 30px 0;
    font-size: 50px;
  `}

  ${media.desktop`
    padding: 90px 0 60px 0;
    font-size: 50px;
  `}
`;

export const Slider = styled.div`
  padding-bottom: 50px;
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ${media.tablet`
    padding: 0 50px 50px 50px;
  `}
`;

export const Photo = styled.img`
  max-height: 500px;
  border-radius: 20px;
  margin: 0 10px 0 10px;
  box-shadow: 0px 36px 48px -9px rgba(255, 255, 255, 0.42);

  ${media.tablet`
    max-height: 650px;
  `}
`;
