import { useEffect, useState } from "react";
import { fetchMoves } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { useQuery } from "@tanstack/react-query";
import { MoveData } from "./moveInterface";
import { Table} from "./styled";
import { CenteredTitle } from "../../../Common/CenteredTitle";
import { MovesSorter } from "./MovesSorter";
import { useScrollToTop } from "../../../Common/reusableFunctions/useScrollToTop";
import { fetchAllMoveData } from "../fetchMoveData";
import MovesTableHeader from "./MovesTableHeader";
import { MovesTableRow } from "./MovesTableRow";

export const MovesTable = () => {
  useScrollToTop();
  const offset = 0;
  const limit = 933;
  const [moveData, setMoveData] = useState<Record<string, MoveData>>({});
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const { isLoading, isError, data } = useQuery(
    ["moves", { limit: limit, offset: offset }],
    () => fetchMoves(limit, offset)
  );

  const sortedMoves = MovesSorter({
    data: data?.results || [],
    moveData,
    sortKey,
    sortDirection,
  });

  useEffect(() => {
    setShowLoader(true);
    fetchAllMoveData(data?.results || [], setMoveData, setLoading);
    setTimeout(() => {
      setShowLoader(false);
    }, 5000);
  }, [data]);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  if (showLoader) return <Loader />;
  if ((isLoading || loading) && !data) return null;
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
    </>
  );
};
