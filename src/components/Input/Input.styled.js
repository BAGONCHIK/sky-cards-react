import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  margin-bottom: 10px;
  border-radius: 16px;
  border: none;
  background: white;
  box-shadow: 0px 10px 30px rgba(19, 23, 31, 0.1);
  overflow: hidden;
`;

export const Input = styled.input`
  width: 100%;
  padding: 30px 23.7px 13px 18px;
  border: none;
  cursor: pointer;
  font-family: "MontserratRegular";
  color: black;
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    line-height: inherit;
    font-family: inherit;
    font-size: inherit;
    min-height: 45%;
    font-family: "MontserratLight";
    color: grey;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 19px;
  font-family: "MontserratSemiBold";
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${({ hasText }) => (hasText ? "lightgrey" : "black")};
  pointer-events: none;
`;
