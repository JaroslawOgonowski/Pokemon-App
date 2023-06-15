import { Details, PokemonId, PokemonImage, PokemonName, Wrapper } from "./styled"
import pokeball from "../SideBar/images/Poké_Ball_icon.png"
import ColorThief from 'colorthief';
import { useEffect, useState } from "react";
interface PokemonTileProps {
  id: number;
  name: string;
  key: any;
}
export const PokemonTile = (props: PokemonTileProps) => {
  const pokemonName = props.name.slice(0, 1).toUpperCase() + props.name.slice(1);
  const realID = props.id + 1;
  const [dominantColor, setDominantColor] = useState('');
 
  useEffect(() => {
    const imageUrl = realID < 1010
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${realID}.png`
      : pokeball;

    getDominantColor(imageUrl);
  }, [realID]);

  const getDominantColor = (imageUrl: string) => {
    const image = new Image();
    image.crossOrigin = 'Anonymous';

    image.onload = () => {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(image);
      const dominantColor = `rgb(${color.join(',')})`;
      setDominantColor(dominantColor);
    };

    image.src = imageUrl;
  };
console.log(dominantColor)
  return (
    <Wrapper dominantColor={dominantColor} to="/pokemonDetails">
      {realID < 1010 ? (
        <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${realID}.png`} />
      ) : (
        <PokemonImage src={pokeball} />
      )}
      <Details>
        <PokemonId>#{realID}</PokemonId>
        <PokemonName>{pokemonName}</PokemonName>
      </Details>
    </Wrapper>
  );
};