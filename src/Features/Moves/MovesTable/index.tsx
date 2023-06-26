import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchMove, fetchMoves } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { useQuery } from "@tanstack/react-query";
import { Move, MoveData } from "./moveInterface";
import { scrollToTop } from "../../../Common/reusableFunctions/scrollToTop";
import { useOffsetFromLocationSearch } from "../../../Common/reusableFunctions/useOffsetFromLocationSearch";
import { handleNextPage, handlePrevPage } from "../../../Common/reusableFunctions/buttonFunctions";
import TypeIcon from "../../../Common/TypeIcon";
import { ItemNamesEdit } from "../../../Common/reusableFunctions/itemNamesEdit";
import { Button, ButtonBox, MoveName, Table, TableCell, TableHead, TableRow } from "./styled";
import { ailment, damageClass } from "./tableSwitches";


export const MovesTable = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const limit = 25;
  const topRef = useRef<HTMLDivElement>(null);
  useOffsetFromLocationSearch(offset, setOffset);

  const { isLoading, isError, data } = useQuery(
    ["moves", { limit: limit, offset: offset }],
    () => fetchMoves(limit, offset)
  );
  const maxOffset = (data?.count || 0) - limit;

  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
    navigate(`/moves?offset=${newOffset}`);
    scrollToTop(topRef);
  };

  const handlePrevPageClick = () => {
    handlePrevPage(offset, limit, handlePageChange);
  };
  const handleNextPageClick = () => {
    handleNextPage(offset, limit, maxOffset, handlePageChange);
  };

  const [moveData, setMoveData] = useState<Record<string, MoveData>>({});
  const [loading, setLoading] = useState(true);

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
              ailment:
                { name: moveInfo.meta.ailment.name }
            }
          };
          newData[move.name] = moveData;
        } catch (error) {
        }
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
      <div ref={topRef} />
      <ButtonBox>
        <Button onClick={() => handlePrevPageClick()}>◀ Prev</Button>
        <Button onClick={() => handleNextPageClick()}>Next ▶</Button>
      </ButtonBox>
      <Table>
        <thead>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Effect</TableHead>
            <TableHead>Damage Class</TableHead>
            <TableHead>Accuracy</TableHead>
            <TableHead>Power</TableHead>
            <TableHead>PP</TableHead>
            <TableHead>Crit</TableHead>
            <TableHead>Drain</TableHead>
            <TableHead>Flinch</TableHead>
            <TableHead>Healing</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {data.results.map((move: Move) => {
            if (loading || !moveData[move.name]) return null;
            if (!moveData[move.name]) return null;
            const moveInfo = moveData[move.name];

            return (
              <TableRow key={move.name}>
                <TableCell><MoveName to={`/move/details/id=${moveInfo.name}`}>{ItemNamesEdit(moveInfo.name)}</MoveName></TableCell>
                <TableCell><TypeIcon table={true} pokemonTypes={[{ slot: 1, type: { name: moveInfo.type.name, url: "" } }]} /></TableCell>
                <TableCell>{ailment(moveInfo.meta.ailment.name)}</TableCell>
                <TableCell><img src={damageClass(moveInfo.damage_class.name)} alt={moveInfo.damage_class.name} /></TableCell>
                <TableCell>{moveInfo.accuracy}</TableCell>
                <TableCell>{moveInfo.power}</TableCell>
                <TableCell>{moveInfo.pp}</TableCell>
                <TableCell>{moveInfo.meta.crit_rate}</TableCell>
                <TableCell>{moveInfo.meta.drain}</TableCell>
                <TableCell>{moveInfo.meta.flinch_chance}</TableCell>
                <TableCell>{moveInfo.meta.healing}</TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
