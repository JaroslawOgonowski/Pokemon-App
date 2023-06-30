import { PokemonImage, StyledTitle, TitleBox } from "./styled";

export const Title = ({ titleContent }: { titleContent: string }) => {
  let randomNumber1 = Math.floor(Math.random() * 1009) + 1;
  let randomNumber2 = Math.floor(Math.random() * 150) + 1;

  return (
    <TitleBox>
      <PokemonImage
        key="tilimg1"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber1}.png`}
      />
      <StyledTitle>{titleContent}</StyledTitle>
      <PokemonImage
        key="tilimg2"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber2}.png`}
      />
    </TitleBox>
  );
};
