import styled from "styled-components";
import typesRelations from "./Pokemon-Lets-Go-Type-Chart.webp";

export const StyledTypesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
  padding-bottom: 10vh;
`;

export const TypesP = styled.p`
  margin: 0 auto;
  width: 96%;
  color: #e4dede;
  font-size: 3vh;
  padding-bottom: 1vh;
`;

export const TypesRealationsImg = styled.div`
  width: 96%;
  height: 80vh;
  background-image: url(${typesRelations});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
