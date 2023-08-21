import styled from "styled-components";
import { css } from "styled-components";

export const StyledPage = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;

export const StyledRoutes = styled.div`
  width: 78%;
  margin-left: auto;
  transition: 500ms;
  ${({ sideBarOn }) =>
    sideBarOn &&
    css`
      @media (min-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        width: 100%;
      }
    `}
`;
