import { Image, StyledLink, Type, Types } from "./styled";
import typesData from "./types.json";
import { getImageByType } from "./getImageByType";

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const TypeIcon = ({
  pokemonTypes,
  table,
  img,
  flex,
}: {
  pokemonTypes: PokemonType[];
  table: boolean;
  img: boolean;
  flex: boolean;
}) => {
  function getBackgroundColorByType(typeName: string): string | undefined {
    const foundType = typesData.find((type) => type.name === typeName);
    return foundType?.backgroundColor;
  }

  function getFontColorByType(typeName: string): string | undefined {
    const foundType = typesData.find((type) => type.name === typeName);
    return foundType?.fontColor || "black";
  }

  const sortedPokemonTypes = pokemonTypes.sort((a, b) =>
    a.type.name.localeCompare(b.type.name)
  );

  return (
    <>
      <Types img={img} table={table} flex={flex}>
        {sortedPokemonTypes.map((object) => (
          <StyledLink
            img={img}
            key={object.type.name}
            to={`/type?id=${object.type.name}`}
          >
            {img ? <Image src={getImageByType(object.type.name)} /> : null}
            <Type
              typeBackgroundColor={getBackgroundColorByType(object.type.name)}
              typeFontColor={getFontColorByType(object.type.name)}
              key={object.type.name}
            >
              {object.type.name}
            </Type>
          </StyledLink>
        ))}
      </Types>
    </>
  );
};

export default TypeIcon;
