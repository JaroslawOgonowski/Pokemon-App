import { useQuery } from "@tanstack/react-query";
import { fetchAllTypes } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";

export const TypesList = () => {
  const limit = 50;

  const { isLoading, isError, data } = useQuery(
    ["allTypes", { limit: limit }],
    () => fetchAllTypes(limit)
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  return (

    <ul>
      {data.response.map((type: { name: string | null | undefined }) => {
        <li>{type.name}</li>;
      })}
    </ul>
  );
};
