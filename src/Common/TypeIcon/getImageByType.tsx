import unknown from "./images/unknown.png";
import shadow from "./images/Shadow.png";
import bug from "./images/GO_Bug.png";
import dark from "./images/GO_Dark.png";
import dragon from "./images/GO_Dragon.png";
import electric from "./images/GO_Electric.png";
import fairy from "./images/GO_Fairy.png";
import fighting from "./images/GO_Fighting.png";
import fire from "./images/GO_Fire.png";
import flying from "./images/GO_Flying.png";
import ghost from "./images/GO_Ghost.png";
import grass from "./images/GO_Grass.png";
import ground from "./images/GO_Ground.png";
import ice from "./images/GO_Ice.png";
import normal from "./images/GO_Normal.png";
import poison from "./images/GO_Poison.png";
import psychic from "./images/GO_Psychic.png";
import rock from "./images/GO_Rock.png";
import steel from "./images/GO_Steel.png";
import water from "./images/GO_Water.png";

export function getImageByType(typeName: string): string {
  switch (typeName) {
    case "unknown":
      return unknown;
    case "shadow":
      return shadow;
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return unknown;
  }
}