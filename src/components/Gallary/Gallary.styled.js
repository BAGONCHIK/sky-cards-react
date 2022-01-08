import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
`;

export const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Photo = styled.img`
  max-height: 500px;
`;
