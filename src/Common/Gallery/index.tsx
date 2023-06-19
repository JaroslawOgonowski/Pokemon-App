import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { GalleryBox, GalleryTitle, StyledGallery, ButtonBox, BaseButton, FastButton, TopMarker } from "./styled";
import { PokemonTile } from "../PokemonTile";
import { fetchGallery } from "../../Core/API";
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

  const topGalleryRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topGalleryRef.current) {
      topGalleryRef.current.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  };

  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
    navigate(`/pokemon?offset=${newOffset}`);
    scrollToTop();
  };

  const handleNextPage = () => {
    const newOffset = offset + 100;
    handlePageChange(newOffset);
  };

  const handleLastPage = () => {
    const newOffset = 1000;
    handlePageChange(newOffset);
  };

  const handlePrevPage = () => {
    const newOffset = Math.max(0, offset - 100);
    handlePageChange(newOffset);
  };

  const handleFirstPage = () => {
    const newOffset = 0;
    handlePageChange(newOffset);
  };

  const { isLoading, isError, data } = useQuery<GalleryData>(
    ["gallery", { limit: limit, offset: offset }],
    () => fetchGallery(limit, offset)
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return data ? (
    <>
      <TopMarker ref={topGalleryRef}/>
      <GalleryTitle >Hall of fame</GalleryTitle>
      <GalleryBox>
        <ButtonBox>
          <BaseButton disabled={offset === 0} onClick={handlePrevPage}>
            <Prev />
          </BaseButton>
          <FastButton disabled={offset === 0} onClick={handleFirstPage}>
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
          <BaseButton onClick={handleNextPage} disabled={offset > 910}>
            <Next />
          </BaseButton>
          <FastButton onClick={handleLastPage} disabled={offset > 910}>
            <Next />
            <Next />
          </FastButton>
        </ButtonBox>
      </GalleryBox>
    </>
  ) : null;
};
