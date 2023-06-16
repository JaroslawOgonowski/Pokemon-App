import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fetchSoloPokemon, fetchSoloPokemonEvolution, fetchSoloPokemonInfo } from "../../../Core/API";
import { Description, StyledPokemonPage, Title } from "./styled";
import { Images } from "./Images";

interface SoloPokemonInfo {
  data: [];
  dataInfo: [];
  results: [];
  name: string;
  flavor_text_entries: any;
  color: any;
}

export const SinglePokemonPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pokeId = searchParams.get("pokeId");

  const { isLoading, isError, data } = useQuery<SoloPokemonInfo>(
    ["soloPokemon", { pokeId: pokeId }],
    () => fetchSoloPokemon(pokeId)
  );

  const { isLoading: isLoadingInfo, isError: isErrorInfo, data: dataInfo } = useQuery<SoloPokemonInfo>(
    ["soloPokemonInfo", { pokeId: pokeId }],
    () => fetchSoloPokemonInfo(pokeId)
  );

  const { isLoading: isLoadingEvolution, isError: isErrorEvolution, data: dataEvolution } = useQuery<SoloPokemonInfo>(
    ["soloPokemonEvolution", { pokeId: pokeId }],
    () => fetchSoloPokemonEvolution(pokeId)
  );

  const color = dataInfo?.color?.name

  return (
    <>
      <StyledPokemonPage color={color}>
        <Title>#{pokeId} {data?.name}</Title>
        <Description>{dataInfo?.flavor_text_entries[7].flavor_text.replace(/\f/g, ' ')}</Description>
        <PokemonCard/>
        <Images pokeId={pokeId}/>
      </StyledPokemonPage>
    </>
  )
}