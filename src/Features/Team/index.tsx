import { useQuery } from "@tanstack/react-query";
import { fetchGallery } from "../../Core/API";
import { useOffsetFromLocationSearch } from "../../Common/reusableFunctions/useOffsetFromLocationSearch";
import { useState } from "react";
import { Error } from "../../Base/Error";
import { Loader } from "../../Base/Loader";
import { PkmBox, RandomTeamPage, TeamImage, Title } from "./styled";

export const Team = () => {
  const limit = 1010;
  const [startIndex, setStartIndex] = useState(0);

  useOffsetFromLocationSearch(startIndex, setStartIndex);
  const { isLoading, isError, data } = useQuery(
    ["team", { limit: limit, offset: startIndex }],
    () => fetchGallery(limit, startIndex)
  );

  const getRandomIndex = () => Math.floor(Math.random() * 1010);

  if (isError) return <Error />;
  if (isLoading) return <Loader />;

  if (data && data.results && data.results.length > 0) {
    return (
      <>
        <RandomTeamPage>
          <Title>YOUR RANDOM TEAM</Title>
          <PkmBox>
          {[1, 2, 3, 4, 5, 6].map((teamMateNumber) => {
            const randomIndex = getRandomIndex();
            return (
              <TeamImage
                key={teamMateNumber}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomIndex}.png`}
                alt={`Team Mate ${teamMateNumber}`}
              />
            );
          })}
          </PkmBox>
        </RandomTeamPage>
      </>
    );
  }
  return null;
};
