import React from "react";
import { FavText, StyledAddToFav, StyledStar } from "./styled";

interface AddToFavProps {
  top: number;
  left: number;

}

export const AddToFav: React.FC<AddToFavProps> = ({ top, left }) => {
  return (
    <StyledAddToFav top={top} left={left}>
      <StyledStar />
      <FavText>Add to favorite</FavText>
    </StyledAddToFav>
  );
};

export default AddToFav;
