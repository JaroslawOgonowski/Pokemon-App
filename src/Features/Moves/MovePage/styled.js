import styled from "styled-components";
import topBanner from "./images/topBanner.jpg";
import constestBanner from "./images/contestBanner.png";
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

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    background-position: right;
    margin-bottom: -5px;
  }
`;

export const Title = styled.h1`
  max-width: 100%;
  margin-left: 20%;
  font-family: "Righteous", cursive;
  color: rgb(186, 207, 255);
  font-size: 18px;
  background-color: rgb(0 0 0 / 84%);
  -webkit-box-shadow: rgb(0 0 0) 0px 0px 35px 20px;
  -moz-box-shadow: rgb(0 0 0) 0px 0px 35px 20px;
  box-shadow: rgb(0 0 0) 0px 0px 35px 20px;
  top: 20%;
  right: 10%;
`;

export const TypeDiv = styled.div`
  margin-left: 20%;
  width: fit-content;
  height: fit-content;
`;

export const MoveBaseInfo = styled.div`
  margin: 0 auto;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  background-image: linear-gradient(
    162deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(4, 14, 31, 1) 63%
  );
`;

export const BallImg = styled(Ball)`
  max-width: none;
  position: absolute;
  top: 21%;
  right: -340px;
  width: 700px;
  height: 700px;
  color: rgba(138, 134, 139, 0.136);
  z-index: 0;
  overflow: hidden;
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
  height: fit-content;
  margin: 10px 2% 0 2%;
  color: white;
  top: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  text-align: center;
`;

export const Description = styled.div`
  max-width: 96%;
  width: 100%;
  margin: 10px 2% 10px 2%;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: #a19d9d;
`;

export const AdditionalInfoBanner = styled(Banner)`
  background-image: url(${constestBanner});
`;

export const AdditionalInfo = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-image: linear-gradient(
    116deg,
    rgb(249 202 62) 0%,
    rgb(233 179 63) 50%,
    rgb(231 177 62) 100%
  );
`;

export const SubTitle = styled.h2`
  margin: 0 0 20px 0;
  padding: 0;
  font-family: "Righteous", cursive;
  color: #000000e7;
  font-size: 36px;
  font-weight: bolder;
  border-radius: 5px;
  align-self: flex-end;
  margin-right: 2%;
`;
export const AdditionalInfoContent = styled.div`
  margin: 2vh 0 2vh 2%;
  color: black;
  font-size: 20px;
`;

export const BallImg2 = styled(BallImg)`
  top: 110%;
  left: -340px;
  color: rgba(16, 16, 17, 0.442);
`;
