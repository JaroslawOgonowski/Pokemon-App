import styled from "styled-components";

export const MoveStatBox = styled.div`
  width: 39%;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 10px;
  border: 1px solid #313131;
  border-radius: 5px;
  z-index: 1;
`;

export const IconBox = styled.div`
  text-align: center;
  width: 65%;
  color: #a19d9d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const MoveInfoDiv = styled.div`
  margin: 0 auto;
  width: calc(2 * 39% + 28px);
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  border: 1px solid #313131;
  border-radius: 5px;
  z-index: 1;
`;

export const Label = styled.span`
  font-size: 16px;
  color: #a19d9d;
  text-align: center;
  z-index: 1;
`;
