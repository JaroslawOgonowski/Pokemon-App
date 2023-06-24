
import { fetchAbilities } from "../../../Core/API";
import { Loader } from "../../../Base/Loader";
import { Error } from "../../../Base/Error";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AllAbilitiesContainer, Button, Title } from "./styled";

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

  const handleNextPage = () => {
    const newOffset = offset + limit;
    const maxOffset = (data?.count || 0) - limit;
    handlePageChange(Math.min(newOffset, maxOffset));
  };

  const handlePrevPage = () => {
    const newOffset = Math.max(0, offset - 100);
    handlePageChange(newOffset);
  };

  const { isLoading, isError, data } = useQuery(
    ["abilities", { limit: limit, offset: offset }],
    () => fetchAbilities(limit, offset)
  );

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return data ? (


    <>
      <Title>Abilities List</Title>
      <AllAbilitiesContainer ref={topAbilityRef}>
        <Button disabled={offset === 0} onClick={handlePrevPage}>
          ◀
        </Button>
        <ul>{data.results.map((ability: { name: any; }) => <li>{ability.name}</li>)}</ul>
        <Button onClick={handleNextPage} disabled={offset === 258}>
          ▶
        </Button>
      </AllAbilitiesContainer >
    </>
  ) : <Error />
}