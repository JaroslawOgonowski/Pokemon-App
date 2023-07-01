import React, { useEffect, useState } from "react";
import { fetchMoves } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MoveData } from "./moveInterface";
import { Table } from "./styled";
import { CenteredTitle } from "../../../Common/CenteredTitle";
import { MovesSorter } from "./MovesSorter";
import { useScrollToTop } from "../../../Common/reusableFunctions/useScrollToTop";
import { fetchAllMoveData } from "../fetchMoveData";
import MovesTableHeader from "./MovesTableHeader";
import { MovesTableRow } from "./MovesTableRow";

export const MovesTable = () => {
  useScrollToTop();
  const initialPageSize = 20;
  const [moveData, setMoveData] = useState<Record<string, MoveData>>({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const { isLoading, isError, data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["moves"],
    ({ pageParam }) => fetchMoves(initialPageSize, pageParam),
    {
      getNextPageParam: (lastPage) => {
        const { next } = lastPage as { next: string };
        return next ? next.split("offset=")[1] : null;
      },
    }
  );

  const allMoves = data?.pages.flatMap((page) => page.results) || [];
  const sortedMoves = MovesSorter({
    data: allMoves,
    moveData,
    sortKey,
    sortDirection,
  });

  useEffect(() => {
    if (!isLoading) {
      fetchAllMoveData(allMoves, setMoveData, setLoading);
    }
  }, [data]);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  if (isLoading && !data) return <Loader />;
  if (isError || !moveData || !data) return <Error />;
  return (
    <>
      <CenteredTitle content="Moves List" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search moves..."
      />
      <Table>
        <MovesTableHeader handleSort={handleSort} />
        <tbody>
          <MovesTableRow
            sortedMoves={sortedMoves}
            loading={loading}
            moveData={moveData}
            searchTerm={searchTerm}
          />
        </tbody>
      </Table>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
};
