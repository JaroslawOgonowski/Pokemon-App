import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGallery } from "../../Core/API";
import { useOffsetFromLocationSearch } from "../../Common/reusableFunctions/useOffsetFromLocationSearch";
import { Error } from "../../Base/Error";
import { Loader } from "../../Base/Loader";
import {
  DeleteButton,
  GenerateButton,
  Padding,
  PkmBox,
  RandomTeamPage,
  SaveButton,
  StyledTeam,
  TeamBox,
  Title,
  TitleBanner,
} from "./styled";
import { PokemonTile } from "../../Common/PokemonTile";
import { useScrollToTop } from "../../Common/reusableFunctions/useScrollToTop";

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
  const [isTeamSaved, setIsTeamSaved] = useState(false);
  
  useScrollToTop();
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
    setIsTeamSaved(false);
  };

  const handleSaveTeam = () => {
    if (currentTeam.length > 0) {
      const updatedTeams: SavedTeams = [...savedTeams, currentTeam];
      setSavedTeams(updatedTeams);
      localStorage.setItem("savedTeams", JSON.stringify(updatedTeams));
      setIsTeamSaved(true);
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
        <TitleBanner>RANDOM TEAM GENERATOR<Padding/></TitleBanner>
        {currentTeam.length > 0 && (
          <StyledTeam>
            <Title>YOUR RANDOM TEAM </Title>
            <TeamBox>
              <PkmBox>
                {currentTeam.map(({ id, name }) => (
                  <PokemonTile key={id} id={id} name={name} />
                ))}
              </PkmBox>
              <SaveButton
                onClick={handleSaveTeam}
                disabled={currentTeam.length === 0}
                isSaved={isTeamSaved}
              >
                {isTeamSaved ? "Saved ✔" : "Save Team"}
              </SaveButton>
            </TeamBox>
          </StyledTeam>
        )}
        <GenerateButton onClick={handleGenerateRandomTeam}>
          Generate New Random Team
        </GenerateButton>
        {savedTeams.length > 0 && (
          <StyledTeam>
            <Title>⇩ SAVED TEAMS ⇩</Title>
            {savedTeams.map((team, index) => (
              <TeamBox>
                <Title> Team {index + 1}</Title>
                <PkmBox key={index}>
                  {team.map(({ id, name }) => (
                    <PokemonTile key={id} id={id} name={name} />
                  ))}
                </PkmBox>
                <DeleteButton onClick={() => handleDeleteTeam(index)}>
                  Delete
                </DeleteButton>
              </TeamBox>
            ))}
          </StyledTeam>
        )}
      </RandomTeamPage>
    </>
  );
};
