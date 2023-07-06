import { StyledLink, Type, Types } from "./styled";
import typesData from "./types.json";

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
}: {
  pokemonTypes: PokemonType[];
  table: boolean;
  img: boolean;
}) => {
  function getBackgroundColorByType(typeName: string): string | undefined {
    const foundType = typesData.find((type) => type.name === typeName);
    return foundType?.backgroundColor;
  }

  function getFontColorByType(typeName: string): string | undefined {
    const foundType = typesData.find((type) => type.name === typeName);
    return foundType?.fontColor || "black";
  }

  return (
    <>
      <Types table={table}>
        {pokemonTypes.map((object) => (
          <StyledLink to={`/type?id=${object.type.name}`}>
            <Type
              typeBackgroundColor={getBackgroundColorByType(object.type.name)}
              typeFontColor={getFontColorByType(object.type.name)}
              key={object.slot}
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
