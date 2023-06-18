import { Title } from "../../Common/Title"
import pika from "./images/sadPika.png"
import toge from "./images/pngegg.png"
import { Box, ErrorPage, ErrorText, ErrorTitle, StyledNavLink } from "./styled"

export const Error = () => {
  return (
    <ErrorPage>
      <ErrorTitle>Error</ErrorTitle>
      <Box>
        <img src={pika} height="200px" alt="sad pikachu" />
        <ErrorText>We're having trouble getting some content... <br />
          Please check your internet connection or try again later...</ErrorText>
        <img src={toge} height="200px" alt="sad togepi" />
      </Box>
      <ErrorText>Back to Homepage</ErrorText>
      <StyledNavLink to="/">Homepage</StyledNavLink>
    </ErrorPage>
  )
}