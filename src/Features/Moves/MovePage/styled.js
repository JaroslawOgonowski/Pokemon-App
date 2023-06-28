import styled from "styled-components";
import topBanner from "./topBanner.jpg";
import { ReactComponent as Ball } from "./pokeball-svgrepo-com.svg";

export const Banner = styled.div`
  width: 100%;
  height: 20vh;
  background-image: url(${topBanner});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    background-position: right;
    margin-bottom: -5px;
  }
`;

export const Title = styled.h1`
  max-width: 100%;
  font-family: 'Righteous', cursive;
  color: white;
  font-size: 18px;
  background-color: #0e0909d5;
  padding: 3%;
  padding-left: 10%;
  -webkit-box-shadow: 2px 8px 35px 2px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 8px 35px 2px rgba(0, 0, 0, 1);
  box-shadow: 2px 8px 35px 2px rgba(0, 0, 0, 1);
`;

export const MoveBaseInfo = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(162deg, rgba(0, 0, 0, 1) 25%, rgba(4, 14, 31, 1) 63%);
  overflow: hidden;
  position: relative; /* Dodane */
`;

export const BallImg = styled(Ball)`
  //fold w280px
  margin-top: -60%;
  margin-left: -30%;
  color: #1f1e1ebf;
  z-index: -1;
  animation: rotateAnim 8s linear infinite;

  @keyframes rotateAnim {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Movestats = styled.div`
width: 100%;
  color: white;
  position: absolute; /* Zmienione */
  top: 0;
  text-align: center;
`;
