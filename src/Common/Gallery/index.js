import { useQuery } from "@tanstack/react-query";
import { StyledGallery } from "./styled";
import { PokemonTile } from "../PokemonTile";

export const Gallery = () => {
  const fetchGallery = async () => (
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0").then(
      (response) => response.json()
    )
  )
  const { isLoading, error, data } = useQuery(
    ["gallery"],
    fetchGallery
  );

  if (isLoading) return (<div>Loading</div>)
  if (error) return (<div>Error</div>)

  const PokemonIndex = index +1 +offset
  if (data) return (
    <StyledGallery>
      {data.results.map((item, index)=>(<PokemonTile
      key= {index}
      name={item.name}
      id={index}      
      />))}
    </StyledGallery>
  )
      }
