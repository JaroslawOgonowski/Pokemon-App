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
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3vw;
  font-family: "Righteous", cursive;
  color: black;
`;

const Adjust = styled.div`
  font-size: 1.8vw;
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
