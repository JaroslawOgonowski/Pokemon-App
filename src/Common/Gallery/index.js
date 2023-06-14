import { useQuery } from "@tanstack/react-query";
import { GalleryBox, StyledGallery } from "./styled";
import { PokemonTile } from "../PokemonTile";

export const Gallery = () => {
  const fetchGallery = async () => (
    fetch("https://pokeapi.co/api/v2/pokemon?limit=24&offset=0").then(
      (response) => response.json()
    )
  )
  const { isLoading, isError, data } = useQuery(
    ["gallery"],
    fetchGallery
  );

  if (isLoading) return (<div>Loading</div>)
  if (isError) return (<div>Error</div>)

  return data ? (
    <GalleryBox>
      <StyledGallery>
        {data.results.map((item, index) => (<PokemonTile
          key={index}
          name={item.name}
          id={index}
        />))}
      </StyledGallery>
    </GalleryBox>
  ) : null
}
