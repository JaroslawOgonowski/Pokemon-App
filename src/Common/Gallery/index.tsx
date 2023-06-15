import { useQuery } from "@tanstack/react-query";
import { GalleryBox, GalleryTitle, NextButton, PrevButton, StyledGallery } from "./styled";
import { PokemonTile } from "../PokemonTile";
import { fetchGallery } from "../../Core/API";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as Next } from "./images/right-arrow-next-svgrepo-com.svg";
import { ReactComponent as Prev } from "./images/left-arrow-prev-svgrepo-com.svg";
import { StyledTitle } from "../Title/styled";

interface Pokemon {
  name: string;
  id: number;
}

interface GalleryData {
  results: Pokemon[];
}

export const Gallery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [offset, setOffset] = useState(0);
  const limit = 100;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const offsetValue = searchParams.get("offset");
    if (offsetValue) {
      setOffset(Number(offsetValue));
    }
  }, [location.search]);

  const handleNextPage = () => {
    const newOffset = offset + 100;
    setOffset(newOffset);
    navigate(`/pokemon?offset=${newOffset}`);
  };

  const handlePrevPage = () => {
    if (offset < 100) {
      const newOffset = offset - offset;
      setOffset(newOffset);
      navigate(`/pokemon?offset=${newOffset}`);
    } else {
      const newOffset = offset - 100;
      setOffset(newOffset);
      navigate(`/pokemon?offset=${newOffset}`);
    }
  };

  const { isLoading, isError, data } = useQuery<GalleryData>(
    ["gallery", { limit: limit, offset: offset }],
    () => fetchGallery(limit, offset)
  );

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return data ? (
    <>
    <GalleryTitle>Hall of fame</GalleryTitle>
    <GalleryBox>
      <PrevButton disabled={offset === 0} onClick={handlePrevPage}>
        <Prev />
      </PrevButton>
      <StyledGallery>
        {data.results.map((item: Pokemon, index: number) => (
          <PokemonTile key={index} name={item.name} id={index + offset} />
        ))}
      </StyledGallery>
      <NextButton onClick={handleNextPage} disabled={offset > 910}>
        <Next />
      </NextButton>
    </GalleryBox>
    </>
  ) : null;
};
