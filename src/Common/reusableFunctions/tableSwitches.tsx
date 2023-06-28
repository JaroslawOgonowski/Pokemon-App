import spec from "./images/Special.png"
import stat from "./images/Status.png"
import phys from "./images/Physical.png"
import { ItemNamesEdit } from "./itemNamesEdit";
import { Burn, Confusion, Disable, Freeze, LeechSeed, Paralysis, Poison, Sleep, Trap } from "../../Features/Moves/MovesTable/styled";
import { ReactComponent as None } from "./images/none.svg";
import { ReactComponent as BRN } from "./images/fire.svg";
import { ReactComponent as FRZ } from "./images/freeze.svg";
import { ReactComponent as CNF } from "./images/confusion.svg";
import { ReactComponent as PLZ } from "./images/elektro.svg";
import { ReactComponent as PSN } from "./images/poison (2).svg";
import { ReactComponent as SLP } from "./images/sleep.svg";

export const damageClass = (damageClass: string) => {
  switch (damageClass) {
    case "physical": return phys;
    case "status": return stat;
    default: return spec;
  }
};

export const ailment = (ailment: string) => {
  switch (ailment) {
    case "none": return "-";
    case "burn": return <Burn>Burn</Burn>;
    case "freeze": return <Freeze>Freeze</Freeze>;
    case "confusion": return <Confusion>Confusion</Confusion>;
    case "paralysis": return <Paralysis>Paralysis</Paralysis>;
    case "trap": return <Trap>Trapped</Trap>;
    case "poison": return <Poison>Poison</Poison>;
    case "sleep": return <Sleep>Sleep</Sleep>;
    case "disable": return <Disable>Disable</Disable>;
    case "leech-seed": return <LeechSeed>Leech seed</LeechSeed>;
    case "nightmare": return <Confusion>Confusion</Confusion>;
    case "yawn": return <Sleep>Sleep</Sleep>;
    default: return ItemNamesEdit(ailment);
  }
};

export const statusIcons = (statusName: string) => {
  switch (statusName) {
    case "none": return <None />;
    case "burn": return <BRN />;
    case "freeze": return <FRZ />;
    case "confusion": return <CNF/>;
    case "paralysis": return <PLZ/>;
    case "trap": return <Trap>Trapped</Trap>;
    case "poison": return <Poison>Poison</Poison>;
    case "sleep": return <Sleep>Sleep</Sleep>;
    case "disable": return <Disable>Disable</Disable>;
    case "leech-seed": return <LeechSeed>Leech seed</LeechSeed>;
    case "nightmare": return <Confusion>Confusion</Confusion>;
    case "yawn": return <Sleep>Sleep</Sleep>;
    default: return 
  }

}