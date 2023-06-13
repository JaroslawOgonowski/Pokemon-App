import styled from "styled-components";
import ball from "../../Base/Header/images/Poké_Ball_icon.png"
export const StyledSideBar = styled.ul`
width: 20%;
padding: 0;
margin: 3vw;
border-right: 1px solid black;
list-style: none;
display: flex;
flex-direction: column;
gap:1vw;

li::before {
  content: '';
  display: inline-block;
  height: 1.4vw;
  width: 1.4vw;
  background-size: contain;
  background-repeat: no-repeat;
  margin:0 0 -0.3vw -2.2vw;
  background-image: url(${ball});
}
`
export const ListItem = styled.li`
width: 95%;
height: 2vw;
padding: 0;
margin: 0;
`

export const StyledA = styled.a`
margin-left: 1vw;
text-decoration: none;
font-size: 1.4vw;
`
