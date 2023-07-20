import { ContactBox, SocialLink, StyledFooter, Title } from "./styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <ContactBox>
        <Title>Created by Jarosław Ogonowski 2023</Title>
        Contact:
        <SocialLink href="https://github.com/JaroslawOgonowski">
          GitHub
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/jaros%C5%82aw-ogonowski-a54ab324a/">Linkedin</SocialLink>
        <SocialLink href="mailto:dza.ogonowski@gmail.com">
          E-Mail
        </SocialLink>
      </ContactBox>
    </StyledFooter>
  );
};
