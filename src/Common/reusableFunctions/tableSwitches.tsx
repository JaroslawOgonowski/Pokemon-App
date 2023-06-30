import spec from "./images/Special.png";
import stat from "./images/Status.png";
import phys from "./images/Physical.png";
import { ItemNamesEdit } from "./itemNamesEdit";
import {
  Burn,
  Confusion,
  Disable,
  Freeze,
  LeechSeed,
  Paralysis,
  Poison,
  Sleep,
  Trap,
} from "../../Features/Moves/MovesTable/styled";
import { ReactComponent as None } from "./images/none.svg";
import { ReactComponent as BRN } from "./images/fire.svg";
import { ReactComponent as FRZ } from "./images/freeze.svg";
import { ReactComponent as CNF } from "./images/confusion.svg";
import { ReactComponent as PLZ } from "./images/elektro.svg";
import { ReactComponent as PSN } from "./images/poison (2).svg";
import { ReactComponent as SLP } from "./images/sleep.svg";
import { ReactComponent as TRP } from "./images/achtung.svg";
import { ReactComponent as DSB } from "./images/disable.svg";
import { ReactComponent as LSD } from "./images/plant.svg";
import { ReactComponent as SLC } from "./images/silence.svg";
import { ReactComponent as UKN } from "./images/unknown.svg";
import { ReactComponent as DD } from "./images/Perish.svg";
import { ReactComponent as NSI } from "./images/no shield.svg";
import { ReactComponent as HBC } from "./images/health.svg";
import { ReactComponent as IGN } from "./images/ingrain.svg";
import { ReactComponent as ATC } from "./images/attract.svg";
import { ReactComponent as EMB } from "./images/wounds.svg";
import { ReactComponent as DFT } from "./images/str.svg";

export const damageClass = (damageClass: string) => {
  switch (damageClass) {
    case "physical":
      return phys;
    case "status":
      return stat;
    default:
      return spec;
  }
};

export const ailment = (ailment: string) => {
  switch (ailment) {
    case "none":
      return "-";
    case "burn":
      return <Burn>Burn</Burn>;
    case "freeze":
      return <Freeze>Freeze</Freeze>;
    case "confusion":
      return <Confusion>Confusion</Confusion>;
    case "paralysis":
      return <Paralysis>Paralysis</Paralysis>;
    case "trap":
      return <Trap>Trapped</Trap>;
    case "poison":
      return <Poison>Poison</Poison>;
    case "sleep":
      return <Sleep>Sleep</Sleep>;
    case "disable":
      return <Disable>Disable</Disable>;
    case "leech-seed":
      return <LeechSeed>Leech seed</LeechSeed>;
    case "nightmare":
      return <Confusion>Confusion</Confusion>;
    case "yawn":
      return <Sleep>Sleep</Sleep>;
    default:
      return ItemNamesEdit(ailment);
  }
};

export const statusIcons = (statusName: string) => {
  switch (statusName) {
    case "none":
      return <None />;
    case "burn":
      return <BRN />;
    case "freeze":
      return <FRZ />;
    case "confusion":
      return <CNF />;
    case "paralysis":
      return <PLZ />;
    case "trap":
      return <TRP />;
    case "poison":
      return <PSN />;
    case "sleep":
      return <SLP />;
    case "disable":
      return <DSB />;
    case "leech-seed":
      return <LSD />;
    case "nightmare":
      return <CNF />;
    case "yawn":
      return <SLP />;
    case "silence":
      return <SLC />;
    case "unknown":
      return <UKN />;
    case "perish-song":
      return <DD />;
    case "no-type-immunity":
      return <NSI />;
    case "heal-block":
      return <HBC />;
    case "ingrain":
      return <IGN />;
    case "infatuation":
      return <ATC />;
    case "embargo":
      return <EMB />;
    default:
      return <DFT />;
  }
};
