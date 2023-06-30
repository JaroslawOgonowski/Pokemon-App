import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import {
  fetchSoloPokemon,
  fetchSoloPokemonEvolution,
  fetchSoloPokemonInfo,
} from "../../../Core/API";
import { StyledPokemonPage } from "./styled";
import { Images } from "./Images";
import { PokemonCard } from "./PokemonCard";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { PokemonEvolve, SoloPokemonInfo } from "./singlePokemonInterfaces";
import { Moves } from "./Moves";

export const SinglePokemonPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pokeId = searchParams.get("pokeId");

  const {
    isLoading: isLoadingInfo,
    isError: isErrorInfo,
    data: dataInfo,
  } = useQuery<SoloPokemonInfo>(["soloPokemonInfo", { pokeId }], () =>
    fetchSoloPokemonInfo(pokeId)
  );

  const evolutionChainURL = dataInfo?.evolution_chain?.url || null;
  const {
    isLoading: isLoadingEvolution,
    isError: isErrorEvolution,
    data: dataEvolution,
  } = useQuery<PokemonEvolve | undefined>(
    ["soloPokemonEvolution", { evolutionChainURL }],
    async () => {
      if (evolutionChainURL !== null) {
        return fetchSoloPokemonEvolution(evolutionChainURL);
      }
      return null;
    }
  );

  const { isLoading, isError, data } = useQuery<SoloPokemonInfo>(
    ["soloPokemon", { pokeId }],
    () => fetchSoloPokemon(pokeId)
  );

  const color = dataInfo?.color?.name;
  const englishFlavorText = dataInfo?.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  );
  const description = englishFlavorText?.flavor_text.replace(/\f/g, " ");

  if (isLoading || isLoadingEvolution || isLoadingInfo) return <Loader />;
  if (isError || isErrorEvolution || isErrorInfo) return <Error />;

  return (
    <StyledPokemonPage color={color}>
      <PokemonCard
        pokeId={pokeId}
        pokemonName={data?.name}
        description={description}
        color={color}
        pokemonTypes={data?.types || []}
        pokemonStats={data?.stats || []}
        pokemonEvolution={dataEvolution}
        generation={dataInfo?.generation}
        habitat={dataInfo?.habitat}
        abilities={data?.abilities}
      />
      <Moves moves={data?.moves} />
      <Images pokeId={pokeId} />
    </StyledPokemonPage>
  );
};
