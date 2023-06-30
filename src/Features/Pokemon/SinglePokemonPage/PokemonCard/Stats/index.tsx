import { PokemonStatsProps } from "../../singlePokemonInterfaces";
import { FullBar, StatValue, StatsBox, TotalStatValue } from "./styled";

export const Stats = ({ pokemonStats }: PokemonStatsProps) => {
  const values = pokemonStats.map((obiect) => obiect.base_stat);
  const statsSum = values.reduce((a, b) => a + b, 0);
  return (
    <StatsBox>
      Stats:
      {pokemonStats.map((statistic) => (
        <FullBar key={statistic.stat.name} statvalue={statistic.base_stat}>
          <StatValue statvalue={statistic.base_stat} />
          {statistic.stat.name.toUpperCase()}: {statistic.base_stat}
        </FullBar>
      ))}
      <FullBar>
        <TotalStatValue statvalue={statsSum} />
        Total Stats: {statsSum}
      </FullBar>
    </StatsBox>
  );
};
