import styled from "styled-components";
import banner from "./Lugia-pokemon-fictional-creatures-artwork-fantasy-art-1664273-wallhere.com.jpg";

export const FavoriteStyledPage = styled.main`
padding-top: 6vw;
margin: 0;
`;

export const Banner = styled.div`
  width: 100%;
  height: 20vh;
  background-image: url(${banner});
  background-position-x: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 8vh;
`;

export const Title = styled.h1`
margin:0
`;