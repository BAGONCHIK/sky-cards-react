import styled from "styled-components";

export const Root = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Radio = styled.div`
  font-family: "MontserratLight";
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #c192ff;
    background: linear-gradient(#c192ff 1.31%, #6a8dff 99.97%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Image = styled.img`
  margin-top: 5px;
  max-width: 70px;
  border-radius: 5px;
`;
