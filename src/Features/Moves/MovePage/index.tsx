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
import { damageClass, statusIcons } from "../../../Common/reusableFunctions/tableSwitches";
import TypeIcon from "../../../Common/TypeIcon";
import { table } from "console";

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
            <TypeIcon
              table={true}
              pokemonTypes={[{ slot: 1, type: { name: data.type.name, url: "" } }]}
            />
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
                type="Dmg Class"
                value={ItemNamesEdit(data.damage_class.name)}
                icon={<img width="39.17vh" height="39.17vh" src={damageClass(data.damage_class.name)} />}
              />
              <MoveStat
                type="Status"
                value={ItemNamesEdit(data.meta.ailment.name)}
                icon={statusIcons(data.meta.ailment.name)}
              />
            </Movestats>
          </MoveBaseInfo>
        </CentredMain>
      </>
    )
}