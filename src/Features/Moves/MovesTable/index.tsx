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
      <button onClick={() => handlePrevPageClick()}>prev</button>
      <button onClick={() => handleNextPageClick()}>next</button>
      {data.results.map((move: Move) => {
        if (loading || !moveData[move.name]) return null;
        if (!moveData[move.name]) return null;
        const moveInfo = moveData[move.name];

        return (
          <table key={move.name}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Damage Class</th>
                <th>Accuracy</th>
                <th>Power</th>
                <th>PP</th>
                <th>Effect</th>
                <th>Crit</th>
                <th>Drain</th>
                <th>Flinch</th>
                <th>Healing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to={`/move/details/id=${moveInfo.name}`}>{ItemNamesEdit(moveInfo.name)}</Link></td>
                <td><TypeIcon pokemonTypes={[{ slot: 1, type: { name: moveInfo.type.name, url: "" } }]}/></td>
                <td>{moveInfo.damage_class.name}</td>
                <td>{moveInfo.accuracy}</td>
                <td>{moveInfo.power}</td>
                <td>{moveInfo.pp}</td>
                <td>{moveInfo.meta.ailment.name}</td>
                <td>{moveInfo.meta.crit_rate}</td>
                <td>{moveInfo.meta.drain}</td>
                <td>{moveInfo.meta.flinch_chance}</td>
                <td>{moveInfo.meta.healing}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </>
  );
};