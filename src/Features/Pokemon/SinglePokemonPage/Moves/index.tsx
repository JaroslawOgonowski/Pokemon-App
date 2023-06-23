import { useState } from "react";
import { Link } from "react-router-dom";
import { MovesProps } from "./movesInterface";

export const Moves = ({ moves }: MovesProps) => {
  
  const games = moves?.reduce((groups: string[], move) => {
    move.version_group_details.forEach((detail) => {
      if (!groups.includes(detail.version_group.name)) {
        groups.push(detail.version_group.name);
      }
    });
    return groups;
  }, []);

  const [gameIndex, setGameIndex] = useState(1);

  const handlePrevGen = () => {
    if (gameIndex === 0) {
      setGameIndex(games?.length ? games.length - 1 : 0);
    } else {
      setGameIndex(gameIndex - 1);
    }
  };

  const handleNextGen = () => {
    if (gameIndex === (games?.length ? games.length - 1 : 0)) {
      setGameIndex(0);
    } else {
      setGameIndex(gameIndex + 1);
    }
  };

  const game = games?.[gameIndex];
  let title = "";
  if (game) {
    if (game === "black-2-white-2") {
      title = "Black 2, White 2";
    } else if (game === "lets-go-pikachu-lets-go-eevee") {
      title = "Let's Go Pikachu, Let's Go Eevee";
    } else if (game === "ultra-sun-ultra-moon") {
      title = "Ultra Sun, Ultra Moon";
    } else {
      title = game
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(", ");
    }
  }

  const filteredMoves = moves?.filter((move) =>
    move.version_group_details.some(
      (detail) => detail.version_group.name === game
    )
  );

  return (
    <>
      <h2>Moves</h2>
      <button onClick={handlePrevGen}>Previous game ⬅</button>
      <h3>{title}</h3>
      <button onClick={handleNextGen}>Next game ➡</button>
      <table>
        <thead>
          <tr>
            <th>Move name</th>
            <th>Learn method</th>
            <th>Level</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredMoves?.map((move) => {
            const moveName = `${move.move.name.charAt(0).toUpperCase()}${move.move.name.slice(1)}`;
            return (
              <tr key={move.move.name}>
                <td>{moveName}</td>
                <td>{move.version_group_details[0].move_learn_method.name}</td>
                <td>{move.version_group_details[0].level_learned_at}</td>
                <td>
                  <Link to={`move/details/id=${move.move.url}`}>Details</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
