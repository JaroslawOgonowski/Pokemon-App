import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  height: 60vh;
  margin: 0 auto;
  border-radius: 1vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;

  @media (max-width: 767px) {
    width: 96%;
    height: 40vh;
    margin-top: 20vh;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3vw;
  font-family: "Righteous", cursive;
  color: black;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Adjust = styled.div`
  font-size: 1.8vw;
  
  @media (max-width: 767px) {
    font-size: 17px;
  }
`;

export const NoFavorites = () => (
  <Wrapper>
    <Title>No favorites added</Title>
    <Adjust>
      If you have a favorite move, ability or pokemon- add it to your favorites
      to make it easier to find the information you are looking for.
    </Adjust>
  </Wrapper>
);
