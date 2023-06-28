import styled from "styled-components";
import topBanner from "./images/topBanner.jpg";
import constestBanner from "./images/contestBanner.jpg";
import { ReactComponent as Ball } from "./images/pokeball-svgrepo-com.svg";

export const Banner = styled.div`
  width: 100%;
  height: 20vh;
  background-image: url(${topBanner});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  justify-content: center;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    background-position: right;
    margin-bottom: -5px;
  }
`;

export const Title = styled.h1`
  max-width: 100%;
  margin: 0 auto;
  font-family: 'Righteous', cursive;
  color: rgb(159, 235, 32);
  font-size: 18px;
  background-color: rgb(0 0 0 / 84%);
  padding: 3%;
  padding-left: 10%;
  -webkit-box-shadow: rgb(0 0 0) 0px 0px 35px 20px;
  -moz-box-shadow: rgb(0 0 0) 0px 0px 35px 20px;
  box-shadow: rgb(0 0 0) 0px 0px 35px 20px;
`;

export const MoveBaseInfo = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(162deg, rgba(0, 0, 0, 1) 25%, rgba(4, 14, 31, 1) 63%);
  overflow-x: hidden;
  position: relative;
`;

export const BallImg = styled(Ball)`
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
  max-width: 96%;
  width: 100%;
  margin: 10px 2% 0 2%;
  color: white;
  position: absolute;
  top: 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Description = styled.div`
  max-width: 96%;
  width: 100%;
  margin: 10px 2% 30px 2%;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: #A19D9D;
`;

export const Contest = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ContestBanner = styled(Banner)`
  background-image: url(${constestBanner}); 
`;

export const SubTitle = styled.h2`
  margin:0;
  padding: 0;
  font-family: 'Righteous', cursive;
  color: rgb(41 4 58);
  font-size: 36px;
  font-weight: bolder;
  background-color: #ffffff33;
  border-radius: 5px;
`