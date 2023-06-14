import { useQuery } from "@tanstack/react-query";
import { GalleryBox, StyledGallery } from "./styled";
import { PokemonTile } from "../PokemonTile";
import { fetchGallery } from "../../Core/API";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Gallery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [offset, setOffset] = useState(0); // początkowa wartość offset

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const offsetValue = searchParams.get('offset');
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
    const newOffset = offset - 100;
    setOffset(newOffset);
    navigate(`/pokemon?offset=${newOffset}`);
  };

  const limit = 100


  const { isLoading, isError, data } = useQuery(
    ["gallery", { limit: limit, offset: offset }],
    () => fetchGallery(limit, offset)
  );

  if (isLoading) return (<div>Loading</div>)
  if (isError) return (<div>Error</div>)

  return data ? (
    <GalleryBox>
      <button disabled={offset === 0} onClick={handlePrevPage}>
        Prev page
      </button>
      <button onClick={handleNextPage}>
        Next page
      </button>
      <StyledGallery>
        {data.results.map((item, index) => (<PokemonTile
          key={index}
          name={item.name}
          id={index + offset}
        />))}
      </StyledGallery>

    </GalleryBox>

  ) : null
}
