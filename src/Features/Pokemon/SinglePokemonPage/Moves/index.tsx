import { useState } from "react";
import { Link } from "react-router-dom";
import { MovesProps } from "./movesInterface";
import { TitleBox } from "../../../../Common/Title/styled";
import { Subtitle } from "../Images/styled";
import { Button, ButtonText, GameTitle } from "./styled";

export const Moves = ({ moves }: MovesProps) => {

  const games = moves?.reduce((groups: string[], move) => {
    move.version_group_details.forEach((detail) => {
      if (!groups.includes(detail.version_group.name)) {
        groups.push(detail.version_group.name);
      }
    });
    return groups;
  }, []);

  const [gameIndex, setGameIndex] = useState(0);

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
    <Subtitle>Moves</Subtitle>
      <TitleBox>        
        <Button onClick={handlePrevGen}><ButtonText>Prev game</ButtonText>⬅</Button>
        <GameTitle>{title}</GameTitle>
        <Button onClick={handleNextGen}><ButtonText>Next game</ButtonText>➡</Button>
      </TitleBox>
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
