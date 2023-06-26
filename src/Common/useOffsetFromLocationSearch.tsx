import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useOffsetFromLocationSearch = (
  offset: number,
  setOffset: React.Dispatch<React.SetStateAction<number>>
) => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const offsetValue = searchParams.get("offset");
    if (offsetValue) {
      setOffset(Number(offsetValue));
    }
  }, [location.search]);

  return offset;
};
