import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 350px;
  min-width: 350px;
  margin: 30px 0 50px 0;
  padding: 20px;
  background: white;
  border-radius: 20px;
  z-index: 1;
  overflow: hidden;
`;

export const Title = styled.div`
  padding-bottom: 20px;
  text-align: center;
  font-family: "MontserratSemiBold";
  font-size: 22px;
`;

export const ExampleList = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 20px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
