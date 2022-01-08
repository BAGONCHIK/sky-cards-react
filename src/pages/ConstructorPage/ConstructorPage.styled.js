import styled from "styled-components";
import { headerHeight } from "../../styles/sizes";

export const Root = styled.div`
  width: 100%;
  min-height: calc(100vh - ${headerHeight}px);
`;
