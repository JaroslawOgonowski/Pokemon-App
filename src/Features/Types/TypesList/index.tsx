import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTypes } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import TypeIcon from "../../../Common/TypeIcon";
import { StyledTypesList, TypesP, TypesRealationsImg } from "./styled";
import { CenteredTitle } from "../../../Common/CenteredTitle";
import typesRelationsNormal from "./0ot60vi6qmax.png";
import typesRelationsMobile from "./af1ba9d66bbe3862749f40a5f36441b9.jpg";
import { Team } from "../../Team";

export const TypesList = () => {
  const limit = 50;
  const { isLoading, isError, data } = useQuery(
    ["allTypes", { limit: limit }],
    () => fetchAllTypes(limit)
  );

  const [typesRelationsImgSrc, setTypesRelationsImgSrc] = useState(
    window.innerWidth >= 767 ? typesRelationsNormal : typesRelationsMobile
  );

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 767) {
        setTypesRelationsImgSrc(typesRelationsNormal);
      } else {
        setTypesRelationsImgSrc(typesRelationsMobile);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  const pokemonTypes = data.results.map((type: { name: any }) => ({
    slot: 1,
    type: {
      name: type.name,
      url: "",
    },
  }));

  return (
    <>
      <StyledTypesList>
        <TypesP>
          Types of Pokémon are very diverse and are broadly based on the
          characteristics of each Pokémon. The simplest example is the elemental
          types, which are very logical and natural. Take fire type Pokémon, for
          instance; flames, high temperature, and smoke often accompany them,
          and their special moves can frequently burn opponents. Just like in
          nature, water can counteract fire, and indeed, water Pokémon have
          little trouble defeating their fiery rivals. On the other hand, high
          temperatures can always melt ice, and in this case, fiery attacks are
          very effective against ice-type Pokémon.{" "}
        </TypesP>
        <TypesP>
          The description above is just one of many types and their
          relationships with two others. Imagine the multitude of other
          interactions, like how Fairy type relates to Steel type... 😎
        </TypesP>
        <TypesP>
          As mentioned, some types are based on elements, but there are also
          types that consider the materials the Pokémon uses, their history or
          mythology. Below I present a table of all damage relationships between
          types.
        </TypesP>
        <TypesRealationsImg
          src={typesRelationsImgSrc}
          alt="pokemon types relations table"
        />
        <CenteredTitle content="Types List" />
        <TypeIcon
          flex={false}
          pokemonTypes={pokemonTypes}
          table={false}
          img={true}
        />
      </StyledTypesList>
    <Team/>
    </>
  );
};
