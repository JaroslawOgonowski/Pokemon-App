import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fetchTypeById } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { CentredMain } from "../../../Common/CentredMain";
import { ItemNamesEdit } from "../../../Common/reusableFunctions/itemNamesEdit";
import {
  SubTitle,
  Title,
  TitleBox,
  TopBanner,
  TypeImage,
  TypeInfo,
} from "./styled";
import { getImageByType } from "../../../Common/TypeIcon/getImageByType";
import { MovesTable } from "../../Moves/MovesTable";

export const TypePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeId = searchParams.get("id");

  const { isLoading, isError, data } = useQuery<any>(
    ["TypeById", { typeId }],
    () => fetchTypeById(typeId)
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <CentredMain>
      <TopBanner>
        <TitleBox>
          <TypeImage src={getImageByType(data.name)} />
          <Title>{`${ItemNamesEdit(data.name)} (Type)`}</Title>
        </TitleBox>
      </TopBanner>
      <TypeInfo>
        <SubTitle>Damage relations</SubTitle>
        <div>
          Double damage from:
          {data.damage_relations.double_damage_from.length > 0
            ? data.damage_relations.double_damage_from.map(
                (item: { name: any }) => item.name
              )
            : "no dependencies"}
          Half damage from:
          {data.damage_relations.half_damage_from.length > 0
            ? data.damage_relations.half_damage_from.map(
                (item: { name: any }) => item.name
              )
            : "no dependencies"}
          No damage from:
          {data.damage_relations.no_damage_from.length > 0
            ? data.damage_relations.no_damage_from.map(
                (item: { name: any }) => item.name
              )
            : "no dependencies"}
          Half damage to:
          {data.damage_relations.half_damage_to.length > 0
            ? data.damage_relations.half_damage_to.map(
                (item: { name: any }) => item.name
              )
            : "no dependencies"}
          Double damage to:
          {data.damage_relations.double_damage_to.length > 0
            ? data.damage_relations.double_damage_to.map(
                (item: { name: any }) => item.name
              )
            : "no dependencies"}
          No damage to:
          {data.damage_relations.no_damage_to.length > 0
            ? data.damage_relations.no_damage_to.map(
                (item: { name: any }) => item.name
              )
            : "no dependencies"}
        </div>
        <MovesTable moveList={data.moves} />
      </TypeInfo>
    </CentredMain>
  );
};
