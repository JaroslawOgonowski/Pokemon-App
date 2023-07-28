import { useQuery } from "@tanstack/react-query";
import { fetchGallery } from "../../Core/API";
import { useOffsetFromLocationSearch } from "../../Common/reusableFunctions/useOffsetFromLocationSearch";
import { useState, useEffect } from "react";
import { Error } from "../../Base/Error";
import { Loader } from "../../Base/Loader";
import { PkmBox, RandomTeamPage, TeamImage, Title } from "./styled";
import { PokemonTile } from "../../Common/PokemonTile";

type Pokemon = {
  id: number;
  name: string;
};

type SavedTeams = Pokemon[][];

export const Team = () => {
  const limit = 1010;
  const [startIndex, setStartIndex] = useState(0);
  const [savedTeams, setSavedTeams] = useState<SavedTeams>([]);

  useOffsetFromLocationSearch(startIndex, setStartIndex);
  const { isLoading, isError, data } = useQuery(
    ["team", { limit: limit, offset: startIndex }],
    () => fetchGallery(limit, startIndex)
  );

  useEffect(() => {
    const savedTeamsFromLocalStorage: SavedTeams = JSON.parse(
      localStorage.getItem("savedTeams") || "[]"
    );
    setSavedTeams(savedTeamsFromLocalStorage);
  }, []);

  const getRandomIndex = () => Math.floor(Math.random() * 1010);

  const handleSaveTeam = () => {
    const newTeam: Pokemon[] = [];
    for (let i = 0; i < 6; i++) {
      const randomIndex = getRandomIndex();
      const id = randomIndex + 1;
      const name = data.results[id].name;
      newTeam.push({ id, name });
    }

    const updatedTeams: SavedTeams = [...savedTeams, newTeam];
    setSavedTeams(updatedTeams);
    localStorage.setItem("savedTeams", JSON.stringify(updatedTeams));
  };

  const handleDeleteTeam = (index: number) => {
    const updatedTeams: SavedTeams = savedTeams.filter((_, i) => i !== index);
    setSavedTeams(updatedTeams);
    localStorage.setItem("savedTeams", JSON.stringify(updatedTeams));
  };

  if (isError) return <Error />;
  if (isLoading) return <Loader />;

  return (
    <>
      <RandomTeamPage>
        <Title>YOUR RANDOM TEAM</Title>
        <PkmBox>
          {[1, 2, 3, 4, 5, 6].map((teamMateNumber) => {
            const randomIndex = getRandomIndex();
            const id = randomIndex + 1;
            const name = data.results[id].name;
            return <PokemonTile key={teamMateNumber} id={id} name={name} />;
          })
          }
          <button onClick={handleSaveTeam}>Save Team</button>
        </PkmBox>
      </RandomTeamPage>
      {savedTeams.length > 0 && (
        <div>
          <Title>SAVED TEAMS</Title>
          <PkmBox>
            {savedTeams.map((team, index) => (
              <div key={index}>
                {team.map(({ id, name }) => (
                  <PokemonTile key={id} id={id} name={name} />
                ))}
                <button onClick={() => handleDeleteTeam(index)}>Delete</button>
              </div>
            ))}
          </PkmBox>
        </div>
      )}
    </>
  );
};
