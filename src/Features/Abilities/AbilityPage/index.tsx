import { useLocation } from "react-router-dom";
import { fetchAbility } from "../../../Core/API";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../../Base/Loader";
import { ErrorPage } from "../../../Base/Error/styled";
import {
  Banner,
  Description,
  GenInfo,
  PokeAbility,
  StyledAbilityPage,
  TextBox,
} from "./styled";
import { CenteredTitle } from "../../../Common/CenteredTitle";
import { PokemonTile } from "../../../Common/PokemonTile";
import { BallImg } from "../../Moves/MovePage/styled";
import { useScrollToTop } from "../../../Common/reusableFunctions/useScrollToTop";
import AddToFav from "../../../Common/AddToFav";

export const AbilityPage = (): JSX.Element => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const abilityId = searchParams.get("id");
  useScrollToTop();
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
        <Banner />
        <CenteredTitle content={`${abilityName} (Ability)`} />
        <AddToFav savedInfo={data.name} category="ability" favAdditionalInfo=""/>
        <TextBox>
          <GenInfo>First saw in: {data.generation.name.toUpperCase()}</GenInfo>
          <Description>{data.effect_entries[1]?.effect}</Description>
        </TextBox>
        <BallImg />
        <CenteredTitle content={"Pokemons with this ability:"} />
        <PokeAbility>
          {data.pokemon?.map((item: any) =>
            getPokeIdValue(item.pokemon.url) <= 1010 ? (
              <PokemonTile
                key={item.pokemon.name}
                id={getPokeIdValue(item.pokemon.url)}
                name={item.pokemon.name}
              />
            ) : null
          )}
        </PokeAbility>
      </StyledAbilityPage>
    );
};
