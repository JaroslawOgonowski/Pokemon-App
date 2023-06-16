import { Container, Image, ImagesDescription, StyledImageBox } from "./styled"

interface ImageBoxProps {
  url1: string |null;
  url2: string | null;
  description: object | string;
  pokeId: string | null;
  format: string;
}
import { useState } from "react";

export const ImageBox = ({ url1, url2, description, pokeId, format }: ImageBoxProps) => {
  const [imagesLoaded, setImagesLoaded] = useState(true);

  const handleImageError = () => {
    setImagesLoaded(false);
  };

  if (!imagesLoaded) {
    return null;
  }

  return (
    <StyledImageBox>
      <Container>
        {url1 && <Image src={`${url1}${pokeId}${format}`} onError={handleImageError} />}
        {url2 && <Image src={`${url2}${pokeId}${format}`} onError={handleImageError} />}
      </Container>
      <ImagesDescription>{description}</ImagesDescription>
    </StyledImageBox>
  );
};
