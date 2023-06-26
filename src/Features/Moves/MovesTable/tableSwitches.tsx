import spec from "./images/Special.jpg"
import stat from "./images/Status.jpg"
import phys from "./images/Physical.jpg"
import { ItemNamesEdit } from "../../../Common/reusableFunctions/itemNamesEdit";
import { Burn, Confusion, Disable, Freeze, LeechSeed, Paralysis, Poison, Sleep, Trap } from "./styled";

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
    case "trap": return <Trap>Trap</Trap>;
    case "poison": return <Poison>Poison</Poison>;
    case "sleep": return <Sleep>Sleep</Sleep>;
    case "disable": return <Disable>Disable</Disable>;
    case "leech-seed": return <LeechSeed>Leech seed</LeechSeed>;
    case "nightmare": return <Confusion>Confusion</Confusion>;
    case "yawn": return <Sleep>Sleep</Sleep>;
    default: return ItemNamesEdit(ailment);
  }
};