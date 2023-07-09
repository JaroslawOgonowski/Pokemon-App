import { useQuery } from "@tanstack/react-query";
import { fetchAllTypes } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import TypeIcon from "../../../Common/TypeIcon";

export const TypesList = () => {
  const limit = 50;

  const { isLoading, isError, data } = useQuery(
    ["allTypes", { limit: limit }],
    () => fetchAllTypes(limit)
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  const pokemonTypes = data.results.map(
    (type: { name: string | null | undefined }) => ({
      slot: 1,
      type: {
        name: type.name,
        url: "",
      },
    })
  );

  return (
    <>
      <TypeIcon
        flex={false}
        pokemonTypes={pokemonTypes}
        table={false}
        img={true}
      />
      ;
    </>
  );
};
