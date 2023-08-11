import React, { useState } from "react";
import { FavText, StyledAddToFav, StyledStar } from "./styled";

interface Props {
  savedInfo: any;
}

interface SavedFav {
  // Zdefiniuj odpowiedni interfejs dla SavedFav, jeśli to konieczne
  // np. { id: number; title: string; ... }
}

const AddToFav: React.FC<Props> = ({ savedInfo }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [savedFav, setSavedFav] = useState<SavedFav[]>([]);

  const handleAddToFav = () => {
    const updatedSavedFav: SavedFav[] = [...savedFav, savedInfo];
    setSavedFav(updatedSavedFav);
    localStorage.setItem("savedFav", JSON.stringify(updatedSavedFav));
    setIsSaved(true);
  };

  return (
    <StyledAddToFav onClick={handleAddToFav}>
      <StyledStar />
      <FavText>{isSaved ? "Added to favorite" : "Add to favorite"}</FavText>
    </StyledAddToFav>
  );
};

export default AddToFav;
