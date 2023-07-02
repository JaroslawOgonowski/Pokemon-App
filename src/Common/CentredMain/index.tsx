import React, { ReactNode } from "react";
import styled from "styled-components";
import { useScrollToTop } from "../reusableFunctions/useScrollToTop";

type CentredMainProps = {
  children: ReactNode;
};

const StyledMain = styled.main`
  width: 100%;
  margin: 6vw auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    margin: 80px auto 0 auto;
  }
`;

export const CentredMain: React.FC<CentredMainProps> = ({ children }) => {
  useScrollToTop();
  return <StyledMain>{children}</StyledMain>;
};
