import { useLocation } from "react-router-dom"
import { fetchMoveById } from "../../../Core/API";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { ItemNamesEdit } from "../../../Common/reusableFunctions/itemNamesEdit";
import { CentredMain } from "../../../Common/CentredMain";
import { BallImg, Banner, MoveBaseInfo, Movestats, Title } from "./styled";
import { ReactComponent as PowerIcon } from "./images/bolt_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as AccIcon } from "./images/visibility_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as PPIcon } from "./images/cycle_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as EffectIcon } from "./images/mode_heat_FILL0_wght400_GRAD0_opsz48.svg";

import { MoveStat } from "./MoveStat";
import { ailment, damageClass } from "../../../Common/reusableFunctions/tableSwitches";

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

              <MoveStat
                type="Power"
                value={data.power}
                icon={<PowerIcon />}
              />
              <MoveStat
                type="Accuracy"
                value={data.accuracy}
                icon={<AccIcon />}
              />
              <MoveStat
                type="PP"
                value={data.pp}
                icon={<PPIcon />}
              />
              <MoveStat
                type="Effect chance"
                value={data.effect_chance}
                icon={<EffectIcon />}
              />
              <MoveStat
                type="Damge Class"
                value={ItemNamesEdit(data.damage_class.name)}
                icon={<img src={damageClass(data.damage_class.name)}/>}
              />
              <MoveStat
                type="Status Effect"
                value={ItemNamesEdit(data.meta.ailment.name)}
                icon={<img src={damageClass(data.damage_class.name)}/>}
              />
            </Movestats>
          </MoveBaseInfo>
        </CentredMain>
      </>
    )
}