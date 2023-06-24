import { useLocation } from "react-router-dom";

export const AbilityPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");


  return (<>
    <h1>ability</h1>
    <h2>{id}</h2></>
  )
}