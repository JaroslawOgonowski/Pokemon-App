import { ImageBox } from "../ImageBox";
import { StyledImages, Subtitle } from "./styled";

interface ImagesProps {
  pokeId: string | null;
}

export const Images = ({ pokeId }: ImagesProps) => {
  return (
    <StyledImages>
      <Subtitle>Sprites</Subtitle>
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
        url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/"
        description={
          <div>
            Normal | Shiny
            <br />
            Official artwork
          </div>
        }
        pokeId={pokeId}
        format=".png"
      />
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"
        url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/"
        description={
          <div>
            Normal | Shiny
            <br />
            Home
          </div>
        }
        pokeId={pokeId}
        format=".png"
      />
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/"
        url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/"
        description={
          <div>
            Normal | Gray
            <br />I Generation
          </div>
        }
        pokeId={pokeId}
        format=".png"
      />
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/"
        url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/"
        description={
          <div>
            Normal | Shiny
            <br />
            II Generation
          </div>
        }
        pokeId={pokeId}
        format=".png"
      />
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/"
        url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/"
        description={
          <div>
            Normal | Shiny
            <br />
            III Generation
          </div>
        }
        pokeId={pokeId}
        format=".png"
      />
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/"
        url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/"
        description={
          <div>
            Normal | Shiny
            <br />
            IV Generation
          </div>
        }
        pokeId={pokeId}
        format=".png"
      />
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"
        url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/"
        description={
          <div>
            Normal | Shiny
            <br />V Generation
          </div>
        }
        pokeId={pokeId}
        format=".gif"
      />
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/"
        url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/"
        description={
          <div>
            Normal | Shiny
            <br />
            VI Generation
          </div>
        }
        pokeId={pokeId}
        format=".png"
      />
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/"
        url2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/"
        description={
          <div>
            Normal | Shiny
            <br />
            VII Generation
          </div>
        }
        pokeId={pokeId}
        format=".png"
      />
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
        url2={null}
        description={
          <div>
            Normal <br /> Dream world
          </div>
        }
        pokeId={pokeId}
        format=".svg"
      />
      <ImageBox
        url1="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/"
        url2={null}
        description={<div>PC Icon</div>}
        pokeId={pokeId}
        format=".png"
      />
    </StyledImages>
  );
};
