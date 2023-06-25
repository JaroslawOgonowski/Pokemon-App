import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchMove, fetchMoves } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { useQuery } from "@tanstack/react-query";
import { Move, MoveData } from "./moveInterface";


export const MovesTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [offset, setOffset] = useState(0);
  const limit = 25;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const offsetValue = searchParams.get("offset");
    if (offsetValue) {
      setOffset(Number(offsetValue));
    }
  }, [location.search]);

  const topMovesRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topMovesRef.current) {
      topMovesRef.current.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  };

  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
    navigate(`/moves?offset=${newOffset}`);
    scrollToTop();
  };

  const handleNextPage = () => {
    const newOffset = offset + limit;
    const maxOffset = (data?.count || 0) - limit;
    handlePageChange(Math.min(newOffset, maxOffset));
  };

  const handlePrevPage = () => {
    const newOffset = Math.max(0, offset - 25);
    handlePageChange(newOffset);
  };

  const { isLoading, isError, data } = useQuery(
    ["moves", { limit: limit, offset: offset }],
    () => fetchMoves(limit, offset)
  );

  const [moveData, setMoveData] = useState<Record<string, MoveData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMoveData = async () => {
      setLoading(true);
      const moves = data?.results || [];
      const newData: Record<string, MoveData> = {};
      for (const move of moves) {
        try {
          const moveInfo = await fetchMove(move.url); console.log(moveInfo)          
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
      <button onClick={() => handleNextPage()}>next</button>
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
                <td><Link to={`/move/details/id=${moveInfo.name}`}>{moveInfo.name}</Link></td>
                <td>{moveInfo.type.name}</td>
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
