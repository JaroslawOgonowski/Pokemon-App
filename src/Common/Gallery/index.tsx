import { useQuery } from "@tanstack/react-query";
import { GalleryBox, GalleryTitle, StyledGallery, ButtonBox, BaseButton, FastButton } from "./styled";
import { PokemonTile } from "../PokemonTile";
import { fetchGallery } from "../../Core/API";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as Next } from "./images/right-arrow-next-svgrepo-com.svg";
import { ReactComponent as Prev } from "./images/left-arrow-prev-svgrepo-com.svg";
import { Loader } from "../../Base/Loader";
import { Error } from "../../Base/Error";

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
  const handleLastPage = () => {
    const newOffset = 1000;
    setOffset(newOffset);
    navigate(`/pokemon?offset=${newOffset}`)
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

  const handleFirstPage = () => {
    const newOffset = 0;
    setOffset(newOffset);
    navigate(`/pokemon?offset=${newOffset}`)
  }

  const { isLoading, isError, data } = useQuery<GalleryData>(
    ["gallery", { limit: limit, offset: offset }],
    () => fetchGallery(limit, offset)
  );

  if (isLoading) return <Loader/>;
  if (isError) return <Error/>;

  return data ? (
    <>
      <GalleryTitle>Hall of fame</GalleryTitle>
      <GalleryBox>
        <ButtonBox>
          <BaseButton disabled={offset === 0} onClick={handlePrevPage}>
            <Prev />
          </BaseButton>
          <FastButton disabled={offset === 0} onClick={handleFirstPage}>
            <Prev /><Prev />
          </FastButton>
        </ButtonBox>
        <StyledGallery>
          {data.results.map((item: Pokemon, index: number) => (
            <PokemonTile key={index} name={item.name} id={index + offset} />
          ))}
        </StyledGallery>
        <ButtonBox>
          <BaseButton onClick={handleNextPage} disabled={offset > 910}>
            <Next />
          </BaseButton>
          <FastButton onClick={handleLastPage} disabled={offset > 910}>
            <Next /><Next />
          </FastButton>
        </ButtonBox>
      </GalleryBox>
    </>
  ) : null;
};
