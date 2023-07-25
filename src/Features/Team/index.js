import { useQuery } from "@tanstack/react-query";
import { fetchGallery } from "../../Core/API";

export const Team = () => {
 const offset = 0
 const limit = 1010

  useOffsetFromLocationSearch(startIndex, setStartIndex);
  const { isLoading, isError, data } = useQuery<GalleryData>(
    ["team", { limit: limit, offset: offset }],
    () => fetchGallery(limit, offset)
  )
  
return(
<div></div>
);
};