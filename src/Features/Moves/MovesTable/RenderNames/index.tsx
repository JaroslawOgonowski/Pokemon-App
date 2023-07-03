import { ItemNamesEdit } from "../../../../Common/reusableFunctions/itemNamesEdit";
import MovesTableHeader from "../MovesTableHeader";
import { MoveName, Table, TableCell, TableRow } from "../styled";

export const RenderNames = ({ names }: { names: any[] }) => {
  return (
    <Table>
      <MovesTableHeader handleSort={null} />
      <tbody>
        <TableRow key={"loader"}>
          <TableCell colSpan={12}>
            Table results is loading. Please wait{" "}
            <img
              width="50px"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d6cfe44-5fe9-4aaf-9cde-700622aa927d/dccwm24-630b8838-739d-419f-9c32-68bf84d971ab.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkNmNmZTQ0LTVmZTktNGFhZi05Y2RlLTcwMDYyMmFhOTI3ZFwvZGNjd20yNC02MzBiODgzOC03MzlkLTQxOWYtOWMzMi02OGJmODRkOTcxYWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1mZ-5Fqcrt4-7f3p5jwNBvyoZpVX9aDtUTQKlollHNU"
            />
          </TableCell>
        </TableRow>
        {names.map((name: any) => (
          <TableRow key={name.name}>
            <TableCell>
              <MoveName to={`/move?id=${name.name}`}>
                {ItemNamesEdit(name.name)}
              </MoveName>
            </TableCell>
            <TableCell colSpan={11}>Loading...</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
