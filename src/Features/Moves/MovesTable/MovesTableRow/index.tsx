import React from "react";
import TypeIcon from "../../../../Common/TypeIcon";
import { ItemNamesEdit } from "../../../../Common/reusableFunctions/itemNamesEdit";
import { AllMovesData } from "../moveInterface";
import { DmgImg, MoveName, TableCell, TableRow } from "../styled";
import {
  ailment,
  damageClass,
} from "../../../../Common/reusableFunctions/tableSwitches";

interface MovesTableRowProps {
  move: AllMovesData;
  favorite: boolean;
  onRemove: (name: string) => void | undefined;
}

export const MovesTableRow: React.FC<MovesTableRowProps> = ({
  move,
  favorite,
  onRemove,
}) => {
  const handleRemove = () => {
    if (onRemove) {
      onRemove(move.name);
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
          <button onClick={handleRemove}>Remove</button>
        </TableCell>
      ) : null}
    </TableRow>
  );
};

export default MovesTableRow;
