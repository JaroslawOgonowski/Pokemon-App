import pika from "./images/sadPika.png";
import toge from "./images/pngegg.png";
import {
  Box,
  ErrorPage,
  ErrorText,
  ErrorTitle,
  Image,
  StyledNavLink,
} from "./styled";

export const Error = () => {
  return (
    <ErrorPage>
      <ErrorTitle>Error</ErrorTitle>
      <Box>
        <Image src={pika} alt="sad pikachu" />
        <ErrorText>
          We're having trouble getting some content...
          <br />
          Please check your internet connection or try again later...
        </ErrorText>
        <Image src={toge} toge={true} alt="sad togepi" />
      </Box>
      <ErrorText>Back to Homepage</ErrorText>
      <StyledNavLink to="/">Homepage</StyledNavLink>
    </ErrorPage>
  );
};
