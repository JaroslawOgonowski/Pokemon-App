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

export const MovesTable = () => {
  const offset = 0
  const limit = 933;
  const [moveData, setMoveData] = useState<Record<string, MoveData>>({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, isError, data } = useQuery(
    ["moves", { limit: limit, offset: offset }],
    () => fetchMoves(limit, offset)
  );

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
    fetchAllMoveData();
  }, [data]);

  if (isLoading || loading) return <Loader />;
  if (isError || !moveData) return <Error />;
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
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Effect</TableHead>
            <TableHead>Damage Class</TableHead>
            <TableHead mobileHidden>Accuracy</TableHead>
            <TableHead mobileHidden>Power</TableHead>
            <TableHead mobileHidden>PP</TableHead>
            <TableHead mobileHidden>Crit</TableHead>
            <TableHead mobileHidden>Drain</TableHead>
            <TableHead mobileHidden>Flinch</TableHead>
            <TableHead mobileHidden>Healing</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {data.results
            .filter((move: Move) => move.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((move: Move) => {
              if (loading || !moveData[move.name]) return null;
              if (!moveData[move.name]) return null;
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
