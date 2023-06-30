import {
  CornerBall,
  Details,
  PokemonId,
  PokemonImage,
  PokemonName,
  Wrapper,
} from "./styled";
import pokeball from "./images/Poké_Ball_icon.png";
import ColorThief from "colorthief";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ItemNamesEdit } from "../reusableFunctions/itemNamesEdit";

interface PokemonTileProps {
  id: number;
  name: string;
}

export const PokemonTile = ({ id, name }: PokemonTileProps) => {
  const pokemonName = ItemNamesEdit(name);
  const realID = id + 1;
  const [dominantcolor, setDominantColor] = useState("");
  const [ref, inview] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const imageUrl =
      realID < 1011
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${realID}.png`
        : pokeball;

    getDominantColor(imageUrl);
  }, [realID]);

  const getDominantColor = (imageUrl: string) => {
    const image = new Image();
    image.crossOrigin = "Anonymous";

    image.onload = () => {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(image);
      const dominantColor = `rgb(${color.join(",")})`;
      setDominantColor(dominantColor);
    };
    image.src = imageUrl;
  };

  return (
    <Wrapper
      ref={ref}
      dominantcolor={dominantcolor}
      to={`/pokemonDetails?pokeId=${realID}`}
      inview={inview ? "true" : undefined}
    >
      <CornerBall />
      <PokemonId>{realID < 1011 ? `#${realID}` : `${realID}`}</PokemonId>
      {realID < 1011 ? (
        <PokemonImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${realID}.png`}
        />
      ) : (
        <PokemonImage src={pokeball} />
      )}
      <Details dominantcolor={dominantcolor}>
        <PokemonName>{ItemNamesEdit(pokemonName)}</PokemonName>
      </Details>
    </Wrapper>
  );
};
