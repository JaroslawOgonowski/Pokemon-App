import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { GalleryBox, GalleryTitle, StyledGallery, ButtonBox, BaseButton, FastButton, TopMarker } from "./styled";
import { ReactComponent as Next } from "./images/right-arrow-next-svgrepo-com.svg";
import { ReactComponent as Prev } from "./images/left-arrow-prev-svgrepo-com.svg";
import { fetchGallery } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { PokemonTile } from "../../../Common/PokemonTile";
import { handleFirstPage, handleLastPage, handleNextPage, handlePrevPage } from "../../../Common/buttonFunctions";
import { useOffsetFromLocationSearch } from "../../../Common/useOffsetFromLocationSearch";
import { scrollToTop } from "../../../Common/scrollToTop";
interface Pokemon {
  name: string;
  id: number;
};
interface GalleryData {
  results: Pokemon[];
  count: number;
};

export const Gallery = () => {

  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const limit = 50;
  const topRef = useRef<HTMLDivElement>(null);
  useOffsetFromLocationSearch(offset, setOffset);

  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
    navigate(`/pokemon?offset=${newOffset}`);
    scrollToTop(topRef);
  };

  const maxOffset = 910
  const handlePrevPageClick = () => {
    handlePrevPage(offset, limit, handlePageChange);
  };
  const handleNextPageClick = () => {
    handleNextPage(offset, limit, maxOffset, handlePageChange);
  };
  const handleLastPageClick = () => {
    handleLastPage(maxOffset, handlePageChange);
  };
  const handleFirstPageClick = () => {
    handleFirstPage(handlePageChange)
  };

  const { isLoading, isError, data } = useQuery<GalleryData>(
    ["gallery", { limit: limit, offset: offset }],
    () => fetchGallery(limit, offset)
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return data ? (
    <>
      <TopMarker ref={topRef} />
      <GalleryTitle >Hall of fame</GalleryTitle>
      <GalleryBox>
        <ButtonBox>
          <BaseButton disabled={offset === 0} onClick={handlePrevPageClick}>
            <Prev />
          </BaseButton>
          <FastButton disabled={offset === 0} onClick={handleFirstPageClick}>
            <Prev />
            <Prev />
          </FastButton>
        </ButtonBox>
        <StyledGallery>
          {data.results.map((item: Pokemon, index: number) => (
            <PokemonTile key={index} name={item.name} id={index + offset} />
          ))}
        </StyledGallery>
        <ButtonBox>
          <BaseButton onClick={handleNextPageClick} disabled={offset > 910}>
            <Next />
          </BaseButton>
          <FastButton onClick={handleLastPageClick} disabled={offset > 910}>
            <Next />
            <Next />
          </FastButton>
        </ButtonBox>
      </GalleryBox>
    </>
  ) : null;
};