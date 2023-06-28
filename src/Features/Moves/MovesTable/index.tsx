import { useEffect, useState } from "react";
import { fetchMoves } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { useQuery } from "@tanstack/react-query";
import { MoveData } from "./moveInterface";
import { Table, TableHead, TableRow } from "./styled";
import { CenteredTitle } from "../../../Common/CenteredTitle";
import { MovesSorter } from "./MovesSorter";
import { useScrollToTop } from "../../../Common/reusableFunctions/useScrollToTop";
import { fetchAllMoveData } from "../fetchMoveData";
import { MovesTableRow } from "./MovesTableRow";

export const MovesTable = () => {
  useScrollToTop()
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
        <thead>
          <TableRow>
            <TableHead onClick={() => handleSort("name")}>Name</TableHead>
            <TableHead onClick={() => handleSort("type")}>Type</TableHead>
            <TableHead onClick={() => handleSort("effect")}>Effect</TableHead>
            <TableHead onClick={() => handleSort("damageClass")}>Damage Class</TableHead>
            <TableHead mobileHidden onClick={() => handleSort("accuracy")}>
              Accuracy
            </TableHead>
            <TableHead mobileHidden onClick={() => handleSort("power")}>
              Power
            </TableHead>
            <TableHead mobileHidden onClick={() => handleSort("pp")}>
              PP
            </TableHead>
            <TableHead mobileHidden onClick={() => handleSort("crit")}>
              Crit
            </TableHead>
            <TableHead mobileHidden onClick={() => handleSort("drain")}>
              Drain
            </TableHead>
            <TableHead mobileHidden onClick={() => handleSort("flinch")}>
              Flinch
            </TableHead>
            <TableHead mobileHidden onClick={() => handleSort("healing")}>
              Healing
            </TableHead>
          </TableRow>
        </thead>
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
