import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Button, ButtonBox, DmgImg, MoveName, Table, TableCell, TableHead, TableMarker, TableRow } from "./styled";
import { ailment, damageClass } from "./tableSwitches";
import { CenteredTitle } from "../../../Common/CenteredTitle";

export const MovesTable = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const limit = 25;
  const upRef = useRef<HTMLDivElement>(null);
  useOffsetFromLocationSearch(offset, setOffset);

  const { isLoading, isError, data } = useQuery(
    ["moves", { limit: limit, offset: offset }],
    () => fetchMoves(limit, offset)
  );
  const maxOffset = 825;
  const [moveData, setMoveData] = useState<Record<string, MoveData>>({});
  const [loading, setLoading] = useState(true);

  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
    navigate(`/moves?offset=${newOffset}`);
    scrollToTop(upRef);
  };

  const handlePrevPageClick = () => {
    handlePrevPage(offset, limit, handlePageChange);
  };
  const handleNextPageClick = () => {
    handleNextPage(offset, limit, maxOffset, handlePageChange);
  };

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
      <div ref={upRef} />
      <>
        <CenteredTitle content="Moves List" />
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
            {data.results.map((move: Move) => {
              if (loading || !moveData[move.name]) return null;
              if (!moveData[move.name]) return null;
              const moveInfo = moveData[move.name];

              return (
                <TableRow key={move.name}>
                  <TableCell><MoveName to={`/move/details/id=${moveInfo.name}`}>{ItemNamesEdit(moveInfo.name)}</MoveName></TableCell>
                  <TableCell><TypeIcon table={true} pokemonTypes={[{ slot: 1, type: { name: moveInfo.type.name, url: "" } }]} /></TableCell>
                  <TableCell>{ailment(moveInfo.meta.ailment.name)}</TableCell>
                  <TableCell><DmgImg src={damageClass(moveInfo.damage_class.name)} alt={moveInfo.damage_class.name} /></TableCell>
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
      </></>
  );
};
