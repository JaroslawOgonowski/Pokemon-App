import { useLocation } from "react-router-dom";
import { fetchMoveById } from "../../../Core/API";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { ItemNamesEdit } from "../../../Common/reusableFunctions/itemNamesEdit";
import { CentredMain } from "../../../Common/CentredMain";
import {
  AdditionalInfo,
  AdditionalInfoBanner,
  AdditionalInfoContent,
  BallImg,
  BallImg2,
  Banner,
  Description,
  MoveBaseInfo,
  Movestats,
  SubTitle,
  Title,
  TypeDiv,
} from "./styled";
import { ReactComponent as PowerIcon } from "./images/bolt_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as AccIcon } from "./images/visibility_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as PPIcon } from "./images/cycle_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as EffectIcon } from "./images/mode_heat_FILL0_wght400_GRAD0_opsz48.svg";
import { MoveInfo, MoveStat } from "./MoveStat";
import {
  damageClass,
  statusIcons,
} from "../../../Common/reusableFunctions/tableSwitches";
import TypeIcon from "../../../Common/TypeIcon";
import { PokeAbility } from "../../Abilities/AbilityPage/styled";
import { PokemonTile } from "../../../Common/PokemonTile";

export const MovePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const moveId = searchParams.get("id");

  const { isLoading, isError, data } = useQuery<any>(
    ["moveById", { moveId }],
    () => fetchMoveById(moveId)
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  else {
    const englishFlavorText = data.flavor_text_entries.find(
      (entry: any) => entry.language.name === "en"
    );

    const getPokeIdValue = (url: string) => {
      const parts = url.split("/");
      const numberPart = parts[parts.length - 2];
      const lastValue = numberPart !== "" ? parseInt(numberPart) : 0;
      return lastValue - 1;
    };

    return (
      <>
        <CentredMain>
          <Banner>
            <Title>{`${ItemNamesEdit(data.name)} (Move)`}</Title>
            <TypeDiv>
              <TypeIcon
                flex={false}
                img={false}
                table={true}
                pokemonTypes={[
                  { slot: 1, type: { name: data.type.name, url: "" } },
                ]}
              />
            </TypeDiv>
          </Banner>
          <MoveBaseInfo>
            <Movestats>
              <Description>
                {englishFlavorText.flavor_text}
                <br />
                {data?.effect_entries[0]?.effect
                  ? data.effect_entries[0].effect.replace(
                      "$effect_chance%",
                      `${data.effect_chance}%`
                    )
                  : null}
              </Description>
              <MoveStat type="Power" value={data.power} icon={<PowerIcon />} />
              <MoveStat
                type="Accuracy"
                value={data.accuracy}
                icon={<AccIcon />}
              />
              <MoveStat type="PP" value={data.pp} icon={<PPIcon />} />
              <MoveStat
                type="Status chance"
                value={data.effect_chance ? data.effect_chance : null}
                icon={<EffectIcon />}
              />
              <MoveStat
                type="Dmg Class"
                value={ItemNamesEdit(data.damage_class.name)}
                icon={
                  <img
                    width="39.17vh"
                    height="39.17vh"
                    src={damageClass(data.damage_class.name)}
                  />
                }
              />
              <MoveStat
                type="Status"
                value={ItemNamesEdit(data.meta.ailment.name)}
                icon={statusIcons(data.meta.ailment.name)}
              />
              <MoveInfo
                label="Generation:"
                value={ItemNamesEdit(data.generation.name).toUpperCase()}
              />
              <MoveInfo
                label="Target:"
                value={ItemNamesEdit(data.target.name)}
              />
              <MoveInfo
                label="Statistic chance:"
                value={data.meta.stat_chance}
              />
              <MoveInfo label="Critical rate:" value={data.meta.crit_rate} />
              <MoveInfo label="Drain:" value={data.meta.drain} />
              <MoveInfo
                label="Flinch chance:"
                value={data.meta.flinch_chance}
              />
              <MoveInfo label="Healing:" value={data.meta.healing} />
              <MoveInfo label="Min hits:" value={data.meta.min_hits} />
              <MoveInfo label="Max hits:" value={data.meta.max_hits} />
              <MoveInfo label="Min turns:" value={data.meta.min_turns} />
              <MoveInfo label="Max turns:" value={data.meta.max_turns} />
              <BallImg />
            </Movestats>
          </MoveBaseInfo>

          <AdditionalInfoBanner>
            <SubTitle>More...</SubTitle>
          </AdditionalInfoBanner>
          <AdditionalInfo>
            <AdditionalInfoContent>
              <BallImg2 />
              Contest Type:{" "}
              {data?.contest_type
                ? ItemNamesEdit(data?.contest_type?.name)
                : "None"}
              <SubTitle>Pokemon that can learn to move:</SubTitle>
              <PokeAbility>
                {data.learned_by_pokemon?.map((item: any) => (
                  <PokemonTile
                    key={item.name}
                    id={getPokeIdValue(item.url)}
                    name={item.name}
                  />
                ))}
              </PokeAbility>
            </AdditionalInfoContent>
          </AdditionalInfo>
        </CentredMain>
      </>
    );
  }
};
