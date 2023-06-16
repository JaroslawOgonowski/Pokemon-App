import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fetchSoloPokemon, fetchSoloPokemonEvolution, fetchSoloPokemonInfo } from "../../../Core/API";
import { Description, Images, StyledPokemonPage, Subtitle, Title } from "./styled";
import { ImageBox } from "./ImageBox";

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
        <Images>
          <Subtitle>Images</Subtitle>
          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
            url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/"
            description={<div>Normal | Shiny<br />Official artwork</div>}
            pokeId={pokeId}
            format=".png"
          />

          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"
            url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/"
            description={<div>Normal | Shiny<br />Home</div>}
            pokeId={pokeId}
            format=".png"
          />
          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/"
            url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/"
            description={<div>Normal | Gray<br />I Generation</div>}
            pokeId={pokeId}
            format=".png"
          />
          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/"
            url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/"
            description={<div>Normal | Shiny<br />II Generation</div>}
            pokeId={pokeId}
            format=".png"
          />
          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/"
            url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/"
            description={<div>Normal | Shiny<br />III Generation</div>}
            pokeId={pokeId}
            format=".png"
          />

          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/"
            url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/"
            description={<div>Normal | Shiny<br />IV Generation</div>}
            pokeId={pokeId}
            format=".png"
          />


          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"
            url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/"
            description={<div>Normal | Shiny<br />V Generation</div>}
            pokeId={pokeId}
            format=".gif"
          />


          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/"
            url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/"
            description={<div>Normal | Shiny<br />VI Generation</div>}
            pokeId={pokeId}
            format=".png"
          />


          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/"
            url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/"
            description={<div>Normal | Shiny<br />VII Generation</div>}
            pokeId={pokeId}
            format=".png"
          />

          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
            url2={null}
            description={<div>Normal <br /> Dream world</div>}
            pokeId={pokeId}
            format=".svg"
          />

          <ImageBox
            url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/"
            url2={null}
            description="PC icon"
            pokeId={pokeId}
            format=".png"
          />

        </Images>
      </StyledPokemonPage>
    </>
  )
}