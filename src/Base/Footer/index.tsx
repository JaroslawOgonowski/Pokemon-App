import { ContactBox, GitHub, LinkedIn, StyledFooter, Title } from "./styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Title>Created by Jarosław Ogonowski</Title>
      <ContactBox>
        Contact:
        <GitHub>
          <a>GitHub</a>
        </GitHub>
        <LinkedIn>
          <a>Linkedin</a>
        </LinkedIn>
      </ContactBox>
    </StyledFooter>
  );
};
