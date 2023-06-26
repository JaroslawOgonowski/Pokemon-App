import { fetchAbilities } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AbilityItem, AbilityList, AllAbilitiesContainer, Button, StyledAbilities, StyledLink, Title } from "./styled";
import { handlePrevPage, handleNextPage } from "../../../Common/reusableFunctions/buttonFunctions";
import { scrollToTop } from "../../../Common/reusableFunctions/scrollToTop";
import { useOffsetFromLocationSearch } from "../../../Common/reusableFunctions/useOffsetFromLocationSearch";

export const AllAbilities = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [offset, setOffset] = useState(0);
  const limit = 100;
  const topRef = useRef<HTMLDivElement>(null);
  useOffsetFromLocationSearch(offset, setOffset);
  
  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
    navigate(`/abilities?offset=${newOffset}`);
    scrollToTop(topRef);
  };

  const { isLoading, isError, data } = useQuery(
    ["abilities", { limit: limit, offset: offset }],
    () => fetchAbilities(limit, offset)
  );
  const maxOffset = (data?.count || 0) - limit;

  const handlePrevPageClick = () => {
    handlePrevPage(offset, limit, handlePageChange);
  };
  const handleNextPageClick = () => {
    handleNextPage(offset, limit, maxOffset, handlePageChange);
  };

  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  return data ? (
    <StyledAbilities>
      <Title ref={topRef}>Abilities List</Title>
      <AllAbilitiesContainer>
        <Button disabled={offset === 0} onClick={handlePrevPageClick}>
          ◀
        </Button>
        <AbilityList>
          {data.results
            .map((ability: { name: string }) => ability.name)
            .sort((a: string, b: string) => a.localeCompare(b))
            .map((ability: string) => (
              <StyledLink key={`${ability}Link`} to={`/ability?id=${ability}`}>
                <AbilityItem key={ability}>
                  {`${ability.charAt(0).toUpperCase()}${ability.slice(1)}`.replace("-", " ")}
                </AbilityItem>
              </StyledLink>
            ))}
        </AbilityList>
        <Button onClick={handleNextPageClick} disabled={offset === 258}>
          ▶
        </Button>
      </AllAbilitiesContainer>
    </StyledAbilities>
  ) : (
    <Error />
  );
};
