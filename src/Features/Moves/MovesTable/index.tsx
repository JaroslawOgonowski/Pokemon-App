import { useEffect, useState } from "react";
import { fetchMove, fetchMoves } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { useQuery } from "@tanstack/react-query";
import { Move, MoveData } from "./moveInterface";
import TypeIcon from "../../../Common/TypeIcon";
import { ItemNamesEdit } from "../../../Common/reusableFunctions/itemNamesEdit";
import { DmgImg, MoveName, Table, TableCell, TableHead, TableRow } from "./styled";
import { ailment, damageClass } from "./tableSwitches";
import { CenteredTitle } from "../../../Common/CenteredTitle";
import { MovesSorter } from "./MovesSorter";
import { useScrollToTop } from "../../../Common/reusableFunctions/useScrollToTop";

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
    const fetchAllMoveData = async () => {
      setLoading(true);
      const moves = data?.results || [];
      const newData: Record<string, MoveData> = {};
      for (const move of moves) {
        try {
          const moveInfo = await fetchMove(move.url);
          const moveData: MoveData = {
            name: moveInfo.name,
            url: moveInfo.url,
            accuracy: moveInfo.accuracy,
            type: {
              name: moveInfo.type.name
            },
            damage_class: { name: moveInfo.damage_class.name },
            power: moveInfo.power,
            pp: moveInfo.pp,
            meta: {
              crit_rate: moveInfo.meta.crit_rate,
              drain: moveInfo.meta.drain,
              flinch_chance: moveInfo.meta.flinch_chance,
              healing: moveInfo.meta.healing,
              ailment: { name: moveInfo.meta.ailment.name }
            }
          };
          newData[move.name] = moveData;
        } catch (error) { }
      }
      setMoveData(newData);
      setLoading(false);
    };

    setShowLoader(true);
    fetchAllMoveData();
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);

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
            <TableHead>Damage Class</TableHead>
            <TableHead mobileHidden onClick={() => handleSort("accuracy")}>
              Accuracy
            </TableHead>
            <TableHead mobileHidden onClick={() => handleSort("power")}>
              Power
            </TableHead>
            <TableHead mobileHidden onClick={() => handleSort("pp")}>
              PP
            </TableHead>
            <TableHead mobileHidden>Crit</TableHead>
            <TableHead mobileHidden>Drain</TableHead>
            <TableHead mobileHidden>Flinch</TableHead>
            <TableHead mobileHidden>Healing</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {sortedMoves
            .filter((move: Move) => move.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((move: Move) => {
              if (loading && !moveData[move.name]) return;
              if (!moveData[move.name]) return;
              const moveInfo = moveData[move.name];
              return (
                <TableRow key={move.name}>
                  <TableCell>
                    <MoveName to={`/move/details/id=${moveInfo.name}`}>
                      {ItemNamesEdit(moveInfo.name)}
                    </MoveName>
                  </TableCell>
                  <TableCell>
                    <TypeIcon table={true} pokemonTypes={[{ slot: 1, type: { name: moveInfo.type.name, url: "" } }]} />
                  </TableCell>
                  <TableCell>{ailment(moveInfo.meta.ailment.name)}</TableCell>
                  <TableCell>
                    <DmgImg src={damageClass(moveInfo.damage_class.name)} alt={moveInfo.damage_class.name} />
                  </TableCell>
                  <TableCell mobileHidden>{moveInfo.accuracy}</TableCell>
                  <TableCell mobileHidden>{moveInfo.power}</TableCell>
                  <TableCell mobileHidden>{moveInfo.pp}</TableCell>
                  <TableCell mobileHidden>{moveInfo.meta.crit_rate}</TableCell>
                  <TableCell mobileHidden>{moveInfo.meta.drain}</TableCell>
                  <TableCell mobileHidden>{moveInfo.meta.flinch_chance}</TableCell>
                  <TableCell mobileHidden>{moveInfo.meta.healing}</TableCell>
                </TableRow>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};
