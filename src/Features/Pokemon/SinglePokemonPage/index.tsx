import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fetchSoloPokemon, fetchSoloPokemonEvolution, fetchSoloPokemonInfo } from "../../../Core/API";
import { StyledPokemonPage } from "./styled";
import { Images } from "./Images";
import { PokemonCard, PokemonType } from "./PokemonCard";

interface SinglePokemonPageProps {
  pokeId: string;
}

interface SoloPokemonInfo {
  data: any[];
  dataInfo: any[];
  results: any[];
  name: string;
  flavor_text_entries: any[];
  color: any;
  types: PokemonType[];
}

export const SinglePokemonPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pokeId = searchParams.get("pokeId");

  const { isLoading, isError, data } = useQuery<SoloPokemonInfo>(["soloPokemon", { pokeId }], () =>
    fetchSoloPokemon(pokeId)
  );

  const { isLoading: isLoadingInfo, isError: isErrorInfo, data: dataInfo } = useQuery<SoloPokemonInfo>(
    ["soloPokemonInfo", { pokeId }],
    () => fetchSoloPokemonInfo(pokeId)
  );

  const { isLoading: isLoadingEvolution, isError: isErrorEvolution, data: dataEvolution } = useQuery<SoloPokemonInfo>(
    ["soloPokemonEvolution", { pokeId }],
    () => fetchSoloPokemonEvolution(pokeId)
  );

  const color = dataInfo?.color?.name;

  const englishFlavorText = dataInfo?.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  );

  const description = englishFlavorText?.flavor_text.replace(/\f/g, " ");

  return (
    <StyledPokemonPage color={color}>
      <PokemonCard
        pokeId={pokeId}
        pokemonName={data?.name}
        description={description}
        color={color}
        pokemonTypes={data?.types || []}
      />
      <Images pokeId={pokeId} />
    </StyledPokemonPage>
  );
};
