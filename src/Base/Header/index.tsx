import { Ball, Logo, StyledHeader } from "./styled";
import logo from "./images/International_Pokémon_logo.png"
import ball from "./images/Poké_Ball_icon.png"

export const Header = () => {
return(
  <>
<StyledHeader>
 <Logo src={logo} height="75px"/>
 
  </StyledHeader>
  <Ball src={ball}/>
  </>
)
}