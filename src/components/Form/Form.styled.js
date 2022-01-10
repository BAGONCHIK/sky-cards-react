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

export const LittleText = styled.div`
  margin: 10px 0 0 auto;
  font-family: "MontserratLight";
  font-size: 10px;
  color: grey;
`;

export const ShowBtn = styled.div`
  position: relative;
  z-index: 9999;
  margin-top: 40px;
  text-decoration: none;
  text-align: center;
  outline: none;
  display: inline-block;
  padding: 15px 25px;
  border-radius: 20px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  font-size: 16px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
    cursor: pointer;
  }
`;
