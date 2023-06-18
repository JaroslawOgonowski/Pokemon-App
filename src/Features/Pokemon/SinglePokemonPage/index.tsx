import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fetchSoloPokemon, fetchSoloPokemonEvolution, fetchSoloPokemonInfo } from "../../../Core/API";
import { StyledPokemonPage } from "./styled";
import { Images } from "./Images";
import { PokemonCard, PokemonType } from "./PokemonCard";
import { PokemonStat } from "./PokemonCard/Stats";
import { PokemonEvolve } from "./PokemonCard/Evolution";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
interface SoloPokemonInfo {
  data: any[];
  dataInfo: any[];
  results: any[];
  name: string;
  flavor_text_entries: any[];
  color: any;
  types: PokemonType[];
  stats: PokemonStat[];
  evolution_chain: {
    url: string;
  };
  pokemonEvolution: PokemonEvolve | undefined;
}

export const SinglePokemonPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pokeId = searchParams.get("pokeId");

  const { isLoading: isLoadingInfo, isError: isErrorInfo, data: dataInfo } = useQuery<SoloPokemonInfo>(
    ["soloPokemonInfo", { pokeId }],
    () => fetchSoloPokemonInfo(pokeId)
  );

  const evolutionChainURL = dataInfo?.evolution_chain?.url || null;
  const { isLoading: isLoadingEvolution, isError: isErrorEvolution, data: dataEvolution } = useQuery<PokemonEvolve | undefined>(
    ["soloPokemonEvolution", { evolutionChainURL }],
    async () => {
      if (evolutionChainURL !== null) {
        return fetchSoloPokemonEvolution(evolutionChainURL);
      }
      return null;
    }
  );

  const { isLoading, isError, data } = useQuery<SoloPokemonInfo>(["soloPokemon", { pokeId }], () =>
    fetchSoloPokemon(pokeId)
  );

  const color = dataInfo?.color?.name;
  const englishFlavorText = dataInfo?.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  );
  const description = englishFlavorText?.flavor_text.replace(/\f/g, " ");

  if (isLoading || isLoadingEvolution || isLoadingInfo) return <Loader />
  if (isError || isErrorEvolution || isErrorInfo) return <Error />
  
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
      />
      <Images pokeId={pokeId} />
    </StyledPokemonPage>
  );
};
