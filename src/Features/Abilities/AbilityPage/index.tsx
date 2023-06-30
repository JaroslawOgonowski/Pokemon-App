import { useLocation } from "react-router-dom";
import { fetchAbility } from "../../../Core/API";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../../Base/Loader";
import { ErrorPage } from "../../../Base/Error/styled";
import {
  Description,
  GenInfo,
  PokeAbility,
  StyledAbilityPage,
  TextBox,
} from "./styled";
import { CenteredTitle } from "../../../Common/CenteredTitle";
import { PokemonTile } from "../../../Common/PokemonTile";

export const AbilityPage = (): JSX.Element => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const abilityId = searchParams.get("id");

  const { isLoading, isError, data } = useQuery<any>(
    ["ability", { abilityId }],
    () => fetchAbility(abilityId)
  );

  const abilityName =
    data &&
    `${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`.replace(
      "-",
      " "
    );

  const getPokeIdValue = (url: string) => {
    const parts = url.split("/");
    const numberPart = parts[parts.length - 2];
    const lastValue = numberPart !== "" ? parseInt(numberPart) : 0;
    return lastValue - 1;
  };

  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;
  else
    return (
      <StyledAbilityPage>
        <CenteredTitle content={abilityName} />
        <TextBox>
          <GenInfo>First saw in: {data.generation.name.toUpperCase()}</GenInfo>
          <Description>{data.effect_entries[1]?.effect}</Description>
        </TextBox>
        <CenteredTitle content={"Pokemons with this ability:"} />
        <PokeAbility>
          {data.pokemon?.map((item: any) => (
            <PokemonTile
              key={item.pokemon.name}
              id={getPokeIdValue(item.pokemon.url)}
              name={item.pokemon.name}
            />
          ))}
        </PokeAbility>
      </StyledAbilityPage>
    );
};
