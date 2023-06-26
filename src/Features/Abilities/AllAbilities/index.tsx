import { fetchAbilities } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AbilityItem, AbilityList, AllAbilitiesContainer, Button, StyledAbilities, StyledLink, Title } from "./styled";
import { handlePrevPage, handleNextPage } from "../../../Common/buttonFunctions";

export const AllAbilities = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [offset, setOffset] = useState(0);
  const limit = 100;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const offsetValue = searchParams.get("offset");
    if (offsetValue) {
      setOffset(Number(offsetValue));
    }
  }, [location.search]);

  const topAbilityRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topAbilityRef.current) {
      topAbilityRef.current.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  };

  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
    navigate(`/abilities?offset=${newOffset}`);
    scrollToTop();
  };

  const { isLoading, isError, data } = useQuery(
    ["abilities", { limit: limit, offset: offset }],
    () => fetchAbilities(limit, offset)
  );
  const maxOffset = (data?.count || 0) - limit;
  
  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  const handlePrevPageClick = () => {
    handlePrevPage(offset, limit, handlePageChange);
  };

  const handleNextPageClick = () => {
    handleNextPage(offset, limit, maxOffset, handlePageChange);
  };

  return data ? (
    <StyledAbilities>
      <Title ref={topAbilityRef}>Abilities List</Title>
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
