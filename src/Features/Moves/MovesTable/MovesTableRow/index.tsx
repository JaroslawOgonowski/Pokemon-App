import TypeIcon from "../../../../Common/TypeIcon";
import { ItemNamesEdit } from "../../../../Common/reusableFunctions/itemNamesEdit";
import { Move, MoveData } from "../moveInterface";
import { DmgImg, MoveName, TableCell, TableRow } from "../styled";
import {
  ailment,
  damageClass,
} from "../../../../Common/reusableFunctions/tableSwitches";

interface MovesTableRowProps {
  sortedMoves: Move[];
  loading: boolean;
  moveData: Record<string, MoveData>;
  searchTerm: string;
}

export const MovesTableRow = ({
  sortedMoves,
  loading,
  moveData,
  searchTerm,
}: MovesTableRowProps) => {

  return (
    <>
      {
        sortedMoves
          .filter((move: Move) =>
            move.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((move: Move) => {
            if (loading && !moveData[move.name]) {
            }
            if (!moveData[move.name]) return null;
            const moveInfo = moveData[move.name];
            if (moveData)
              return (
                <TableRow key={move.name}>
                  <TableCell>
                    <MoveName to={`/move?id=${moveInfo.name}`}>
                      {ItemNamesEdit(moveInfo.name)}
                    </MoveName>
                  </TableCell>
                  <TableCell>
                    <TypeIcon
                      table={true}
                      pokemonTypes={[
                        {
                          slot: 1,
                          type: { name: moveInfo.type.name, url: "" },
                        },
                      ]}
                    />
                  </TableCell>
                  <TableCell>{ailment(moveInfo.meta.ailment.name)}</TableCell>
                  <TableCell>
                    <DmgImg
                      src={damageClass(moveInfo.damage_class.name)}
                      alt={moveInfo.damage_class.name}
                    />
                  </TableCell>
                  <TableCell mobileHidden>{moveInfo.accuracy}</TableCell>
                  <TableCell mobileHidden>{moveInfo.power}</TableCell>
                  <TableCell mobileHidden>{moveInfo.pp}</TableCell>
                  <TableCell mobileHidden>{moveInfo.meta.crit_rate}</TableCell>
                  <TableCell mobileHidden>{moveInfo.meta.drain}</TableCell>
                  <TableCell mobileHidden>
                    {moveInfo.meta.flinch_chance}
                  </TableCell>
                  <TableCell mobileHidden>{moveInfo.meta.healing}</TableCell>
                </TableRow>
              );
          })
      }
    </>
  );
};
