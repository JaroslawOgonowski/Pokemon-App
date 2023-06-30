import { useState, useMemo } from "react";
import { MovesProps } from "./movesInterface";
import { TitleBox } from "../../../../Common/Title/styled";
import { Subtitle } from "../Images/styled";
import {
  Button,
  ButtonText,
  DetailLink,
  GameTitle,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "./styled";
import { ItemNamesEdit } from "../../../../Common/reusableFunctions/itemNamesEdit";

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

  const filteredMoves = useMemo(
    () =>
      moves
        ?.filter((move) =>
          move.version_group_details.some(
            (detail) => detail.version_group.name === game
          )
        )
        .sort((a, b) => {
          const learningMethodA =
            a.version_group_details[0].move_learn_method.name;
          const learningMethodB =
            b.version_group_details[0].move_learn_method.name;
          const learningMethodsOrder = ["egg", "machine", "level-up"];
          const levelA = a.version_group_details[0].level_learned_at;
          const levelB = b.version_group_details[0].level_learned_at;

          if (learningMethodA === learningMethodB) {
            return levelA - levelB;
          }

          return (
            learningMethodsOrder.indexOf(learningMethodA) -
            learningMethodsOrder.indexOf(learningMethodB)
          );
        }),
    [moves, game]
  );

  const getmoveIdValue = (url: string) => {
    const parts = url.split("/");
    const numberPart = parts[parts.length - 2];
    const lastValue = numberPart !== "" ? parseInt(numberPart) : 0;
    return lastValue;
  };

  return (
    <>
      <Subtitle>Moves</Subtitle>
      <TitleBox>
        <Button onClick={handlePrevGen}>
          <ButtonText>Prev game</ButtonText>⬅
        </Button>
        <GameTitle>
          Game: <br />
          {title}
        </GameTitle>
        <Button onClick={handleNextGen}>
          <ButtonText>Next game</ButtonText>➡
        </Button>
      </TitleBox>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Move name</TableHeader>
            <TableHeader>Learn method</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>Details</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredMoves?.map((move) => {
            const moveName = ItemNamesEdit(move.move.name);
            const learnMethod = ItemNamesEdit(
              move.version_group_details[0].move_learn_method.name
            );
            return (
              <TableRow key={move.move.name}>
                <TableCell>{moveName}</TableCell>
                <TableCell>{learnMethod}</TableCell>
                <TableCell>
                  {move.version_group_details[0].level_learned_at}
                </TableCell>
                <TableCell>
                  <DetailLink to={`/move?id=${getmoveIdValue(move.move.url)}`}>
                    Details
                  </DetailLink>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
