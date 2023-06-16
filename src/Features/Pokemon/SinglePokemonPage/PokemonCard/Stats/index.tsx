import { FullBar, StatValue, StatsBox, TotalStatValue } from "./styled";

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonStatsProps {
  pokemonStats: PokemonStat[];
}

export const Stats = ({ pokemonStats }: PokemonStatsProps) => {

  const values = pokemonStats.map(obiect => obiect.base_stat)
  const statsSum = values.reduce((a, b) => a + b, 0)

  console.log(statsSum)
  return (
    <StatsBox>
      {pokemonStats.map((statistic) => (
        <FullBar>
          <StatValue statvalue={statistic.base_stat} key={statistic.stat.name} />
          {statistic.stat.name.toUpperCase()}: {statistic.base_stat}
        </FullBar>
      ))}
      <FullBar>
        <TotalStatValue statvalue={statsSum}/>
          Total Stats: {statsSum}
      </FullBar>
    </StatsBox>
  );
};
