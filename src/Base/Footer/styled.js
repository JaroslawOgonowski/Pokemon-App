import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #060505;
  height: 3vh;
  color: white;
`;

export const Title = styled.h2`
  margin: 0.2vh 0;
  font-size: 2vh;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: white;
  transition: 300ms;
  &:hover {
    color: #e3dc07;
  }
`;
