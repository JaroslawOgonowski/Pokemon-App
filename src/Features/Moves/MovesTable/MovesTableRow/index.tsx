import React, { useState } from "react";
import TypeIcon from "../../../../Common/TypeIcon";
import { ItemNamesEdit } from "../../../../Common/reusableFunctions/itemNamesEdit";
import { AllMovesData } from "../moveInterface";
import { DmgImg, MoveName, RemoveButton, TableCell, TableRow } from "../styled";
import {
  ailment,
  damageClass,
} from "../../../../Common/reusableFunctions/tableSwitches";

interface MovesTableRowProps {
  move: AllMovesData;
  favorite: boolean;
}

export const MovesTableRow: React.FC<MovesTableRowProps> = ({
  move,
  favorite,
}) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    if (!isRemoving) {
      setIsRemoving(true);

      const savedFavFromLocalStorage = localStorage.getItem("savedFav");

      if (savedFavFromLocalStorage) {
        const savedFavParsed = JSON.parse(savedFavFromLocalStorage);
        const updatedMoves = savedFavParsed.filter(
          (item: any) => !(item.category === "move" && item.info === move.name)
        );

        localStorage.setItem("savedFav", JSON.stringify(updatedMoves));
        setIsRemoving(false);
        window.location.reload();
      }
    }
  };

  return (
    <TableRow key={move.name}>
      <TableCell>
        <MoveName to={`/move?id=${move.name}`}>
          {ItemNamesEdit(move.name)}
        </MoveName>
      </TableCell>
      <TableCell>
        <TypeIcon
          img={false}
          table={true}
          flex={false}
          pokemonTypes={[
            {
              slot: 1,
              type: { name: move.type.name, url: "" },
            },
          ]}
        />
      </TableCell>
      <TableCell>{ailment(move.meta.ailment.name)}</TableCell>
      <TableCell>
        <DmgImg
          src={damageClass(move.damage_class.name)}
          alt={move.damage_class.name}
        />
      </TableCell>
      <TableCell mobileHidden>{move.accuracy}</TableCell>
      <TableCell mobileHidden>{move.power}</TableCell>
      <TableCell mobileHidden>{move.pp}</TableCell>
      <TableCell mobileHidden>{move.meta.crit_rate}</TableCell>
      <TableCell mobileHidden>{move.meta.drain}</TableCell>
      <TableCell mobileHidden>{move.meta.flinch_chance}</TableCell>
      <TableCell mobileHidden>{move.meta.healing}</TableCell>
      {favorite ? (
        <TableCell>
          <RemoveButton onClick={handleRemove} disabled={isRemoving}>
            {isRemoving ? "Removing..." : "Remove"}
          </RemoveButton>
        </TableCell>
      ) : null}
    </TableRow>
  );
};

export default MovesTableRow;
