import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fetchTypeById } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { CentredMain } from "../../../Common/CentredMain";
import { ItemNamesEdit } from "../../../Common/reusableFunctions/itemNamesEdit";
import {
  HideListButton,
  PokemonDiv,
  RelationBox,
  RelationDiv,
  RelationTitle,
  SubTitle,
  SubTitleBox,
  Title,
  TitleBox,
  TopBanner,
  TypeImage,
  TypeInfo,
} from "./styled";
import { getImageByType } from "../../../Common/TypeIcon/getImageByType";
import { MovesTable } from "../../Moves/MovesTable";
import { PokeAbility } from "../../Abilities/AbilityPage/styled";
import { PokemonTile } from "../../../Common/PokemonTile";
import TypeIcon from "../../../Common/TypeIcon";
import { useState } from "react";

export const TypePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeId = searchParams.get("id");
  const [hideList, setHideList] = useState(false);
  const { isLoading, isError, data } = useQuery<any>(
    ["TypeById", { typeId }],
    () => fetchTypeById(typeId)
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  const getPokeIdValue = (url: string) => {
    const parts = url.split("/");
    const numberPart = parts[parts.length - 2];
    const lastValue = numberPart !== "" ? parseInt(numberPart) : 0;
    return lastValue - 1;
  };

  const renderRelation = (array: any[], title: string) => {
    return (
      <RelationDiv>
        <RelationTitle>{title}</RelationTitle>
        {array.length > 0 ? (
          <TypeIcon
            flex={true}
            table={false}
            img={true}
            pokemonTypes={array.map((item: any) => ({
              slot: 1,
              type: {
                name: item.name,
                url: "",
              },
            }))}
          />
        ) : (
          "No dependencies"
        )}
      </RelationDiv>
    );
  };

  return (
    <>
      <CentredMain>
        <TopBanner>
          <TitleBox>
            <TypeImage src={getImageByType(data.name)} />
            <Title>{`${ItemNamesEdit(data.name)} (Type)`}</Title>
          </TitleBox>
        </TopBanner>
        <TypeInfo>
          <SubTitle>Damage relations</SubTitle>
          <RelationBox>
            {renderRelation(
              data.damage_relations.double_damage_from,
              "Double damage from:"
            )}
            {renderRelation(
              data.damage_relations.half_damage_from,
              "Half damage from:"
            )}
            {renderRelation(
              data.damage_relations.no_damage_from,
              "No damage from:"
            )}
            {renderRelation(
              data.damage_relations.double_damage_to,
              "Double damage to:"
            )}
            {renderRelation(
              data.damage_relations.half_damage_to,
              "Half damage to:"
            )}
            {renderRelation(
              data.damage_relations.no_damage_to,
              "No damage to:"
            )}
          </RelationBox>
        </TypeInfo>
        <SubTitleBox>
          <SubTitle>
            {`${ItemNamesEdit(data.name)} move list...`}{" "}
            <HideListButton onClick={() => setHideList(!hideList)}>
              {hideList ? "Show List 🔽" : "Hide list 🔼"}
            </HideListButton>
          </SubTitle>
        </SubTitleBox>
        {hideList ? null : <MovesTable moveList={data.moves} />}
      </CentredMain>
      <PokemonDiv>
        <SubTitle style={{ color: "black" }}>
          {ItemNamesEdit(data.name)} Pokemon
        </SubTitle>
        <PokeAbility>
          {data.pokemon?.map((item: any) =>
            getPokeIdValue(item.pokemon.url) < 1011 ? (
              <PokemonTile
                key={item.pokemon.name}
                id={getPokeIdValue(item.pokemon.url)}
                name={item.pokemon.name}
              />
            ) : null
          )}
        </PokeAbility>
      </PokemonDiv>
    </>
  );
};
