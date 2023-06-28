import { useLocation } from "react-router-dom"
import { fetchMoveById } from "../../../Core/API";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { ItemNamesEdit } from "../../../Common/reusableFunctions/itemNamesEdit";
import { CentredMain } from "../../../Common/CentredMain";
import { BallImg, Banner, MoveBaseInfo, Movestats, Title } from "./styled";

export const MovePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const moveId = searchParams.get("id")

  const { isLoading, isError, data } =
    useQuery<any>(["moveById", { moveId }], () =>
      fetchMoveById(moveId)
    );

  if (isLoading) return <Loader />
  if (isError) return <Error />
  else
    return (

      <>
        <CentredMain>
          <Banner>
            <Title>{`${ItemNamesEdit(data.name)} (Move)`}</Title>
          </Banner>
          <MoveBaseInfo>
            <BallImg />
            <Movestats>
              Power: {data.power}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dolorum provident velit vero, rem optio similique magni sint repellat minus. Debitis aspernatur culpa nostrum provident exercitationem harum minima saepe aperiam.
            </Movestats>
          </MoveBaseInfo>
        </CentredMain>
      </>
    )
}