import React, { useState, useEffect } from "react";
import { FavText, StyledAddToFav, StyledStar } from "./styled";

interface Props {
  category: string;
  savedInfo: any;
  favAdditionalInfo: string | null;
}

interface SavedFavItem {
  category: string;
  info: any;
  favAdditionalInfo: string | null;
}

const AddToFav: React.FC<Props> = ({ category, savedInfo, favAdditionalInfo }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [savedFav, setSavedFav] = useState<SavedFavItem[]>([]);

  useEffect(() => {
    const savedFavFromLocalStorage = localStorage.getItem("savedFav");
    if (savedFavFromLocalStorage) {
      setSavedFav(JSON.parse(savedFavFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedFav", JSON.stringify(savedFav));
  }, [savedFav]);

  useEffect(() => {
    const existingSavedItem = savedFav.find(item => item.info === savedInfo);
    if (existingSavedItem) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedFav, category]);

  const handleToggleFav = () => {
    const existingSavedItem = savedFav.find(item => item.info === savedInfo);

    if (!existingSavedItem) {
      const updatedSavedFav: SavedFavItem[] = [...savedFav, { category, info: savedInfo, favAdditionalInfo }];
      setSavedFav(updatedSavedFav);
    } else {
      const updatedSavedFav = savedFav.filter(item => item.info !== savedInfo);
      setSavedFav(updatedSavedFav);
    }
  };

  return (
    <StyledAddToFav onClick={handleToggleFav}>
      <StyledStar isSaved={isSaved} />
      <FavText>{isSaved ? "Added to favorites" : "Add to favorites"}</FavText>
    </StyledAddToFav>
  );
};

export default AddToFav;
