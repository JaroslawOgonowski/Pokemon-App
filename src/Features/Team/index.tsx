import { useQuery } from "@tanstack/react-query";
import { fetchGallery } from "../../Core/API";
import { useOffsetFromLocationSearch } from "../../Common/reusableFunctions/useOffsetFromLocationSearch";
import { useState, useEffect } from "react";
import { Error } from "../../Base/Error";
import { Loader } from "../../Base/Loader";
import {
  GenerateButton,
  PkmBox,
  RandomTeamPage,
  SaveButton,
  TeamImage,
  Title,
} from "./styled";
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
  const [currentTeam, setCurrentTeam] = useState<Pokemon[]>([]);

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

  const handleGenerateRandomTeam = () => {
    const newTeam: Pokemon[] = [];
    for (let i = 0; i < 6; i++) {
      const randomIndex = getRandomIndex();
      const id = randomIndex + 1;
      const name = data.results[id].name;
      newTeam.push({ id, name });
    }
    setCurrentTeam(newTeam);
  };

  const handleSaveTeam = () => {
    if (currentTeam.length > 0) {
      const updatedTeams: SavedTeams = [...savedTeams, currentTeam];
      setSavedTeams(updatedTeams);
      localStorage.setItem("savedTeams", JSON.stringify(updatedTeams));
    }
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
        <Title>RANDOM TEAM GENERATOR</Title>
        {currentTeam.length > 0 && (
          <div>
            <Title>YOUR RANDOM TEAM </Title>
            <PkmBox>
              {currentTeam.map(({ id, name }) => (
                <PokemonTile key={id} id={id} name={name} />
              ))}
            </PkmBox>
            <SaveButton
              onClick={handleSaveTeam}
              disabled={currentTeam.length === 0}
            >
              <a>Save Team</a>
            </SaveButton>
          </div>
        )}

        <GenerateButton onClick={handleGenerateRandomTeam}>
          Generate New Random Team
        </GenerateButton>
        {savedTeams.length > 0 && (
          <div>
            <Title>SAVED TEAMS</Title>

            {savedTeams.map((team, index) => (
              <PkmBox key={index}>
                {team.map(({ id, name }) => (
                  <PokemonTile key={id} id={id} name={name} />
                ))}
                <button onClick={() => handleDeleteTeam(index)}>Delete</button>
              </PkmBox>
            ))}
          </div>
        )}
      </RandomTeamPage>
    </>
  );
};
