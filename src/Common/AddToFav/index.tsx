import { FavText, StyledAddToFav, StyledStar } from "./styled";


export const AddToFav = () => {
  return (
    <StyledAddToFav>
      <StyledStar />
      <FavText>Add to favorite</FavText>
    </StyledAddToFav>
  );
};

export default AddToFav;
