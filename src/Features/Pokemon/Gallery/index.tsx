import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  GalleryBox,
  GalleryTitle,
  StyledGallery,
  ButtonBox,
  BaseButton,
  FastButton,
  TopMarker,
} from "./styled";
import { ReactComponent as Next } from "./images/right-arrow-next-svgrepo-com.svg";
import { ReactComponent as Prev } from "./images/left-arrow-prev-svgrepo-com.svg";
import { fetchGallery } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { PokemonTile } from "../../../Common/PokemonTile";
import {
  handleFirstPage,
  handleLastPage,
  handleNextPage,
  handlePrevPage,
} from "../../../Common/reusableFunctions/buttonFunctions";
import { useOffsetFromLocationSearch } from "../../../Common/reusableFunctions/useOffsetFromLocationSearch";
import { scrollToTop } from "../../../Common/reusableFunctions/scrollToTop";

interface Pokemon {
  url: string;
  name: string;
  id: number;
}

interface GalleryData {
  results: Pokemon[];
  count: number;
}

export const Gallery = () => {
  const navigate = useNavigate();
  const offset = 0;
  const limit = 1010;
  const [searchTerm, setSearchTerm] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [itemsInGallery, setItemsInGallery] = useState(30);
  const topRef = useRef<HTMLDivElement>(null);
  const maxIndex = 980;

  useOffsetFromLocationSearch(startIndex, setStartIndex);
  const { isLoading, isError, data } = useQuery<GalleryData>(
    ["gallery", { limit: limit, offset: offset }],
    () => fetchGallery(limit, offset)
  );

  useEffect(() => {
    navigate(`/pokemon?offset=${startIndex}`);
  }, [startIndex, navigate, data]);

  const handlePageChange = (newStartIndex: number) => {
    setStartIndex(newStartIndex);
    scrollToTop(topRef);
  };

  const handlePrevPageClick = () => {
    handlePrevPage(startIndex, itemsInGallery, handlePageChange);
  };

  const handleNextPageClick = () => {
    handleNextPage(startIndex, itemsInGallery, maxIndex, handlePageChange);
  };

  const handleLastPageClick = () => {
    handleLastPage(maxIndex, handlePageChange);
  };

  const handleFirstPageClick = () => {
    handleFirstPage(handlePageChange);
  };

  const getId = (url: string) => {
    const parts = url.split("/");
    const numberPart = parts[parts.length - 2];
    const lastValue = numberPart !== "" ? parseInt(numberPart) : 0;
    return lastValue;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setSearchTerm(e.target.value);
      setStartIndex(0);
      setItemsInGallery(980);
    } else {
      setSearchTerm(e.target.value);
      setStartIndex(0);
      setItemsInGallery(30);
    }
  };

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return data ? (
    <>
      <TopMarker ref={topRef} />
      <GalleryTitle>Hall of fame</GalleryTitle>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search pokemon..."
      />
      <GalleryBox>
        <ButtonBox>
          <BaseButton disabled={startIndex === 0} 
          onClick={handlePrevPageClick}>
            <Prev />
          </BaseButton>
          <FastButton
            disabled={startIndex === 0}
            onClick={handleFirstPageClick}
          >
            <Prev />
            <Prev />
          </FastButton>
        </ButtonBox>
        <StyledGallery>
          {data.results
            .filter((item: Pokemon) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .slice(startIndex, startIndex + itemsInGallery)
            .map((item: Pokemon, index: number) => (
              <PokemonTile
                key={index}
                name={item.name}
                id={getId(item.url) - 1}
              />
            ))}
        </StyledGallery>
        <ButtonBox>
          <BaseButton
            onClick={handleNextPageClick}
            disabled={startIndex >= maxIndex || itemsInGallery === 980}
          >
            <Next />
          </BaseButton>
          <FastButton
            onClick={handleLastPageClick}
            disabled={startIndex >= maxIndex || itemsInGallery === 980}
          >
            <Next />
            <Next />
          </FastButton>
        </ButtonBox>
      </GalleryBox>
    </>
  ) : null;
};
