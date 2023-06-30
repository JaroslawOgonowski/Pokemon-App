import { FlexBox, ReadMoreButton, StyledArticle } from "./styled";
import React, { useState } from "react";
export interface ArticleProps {
  articleContentHead: string;
  readMoreButton: boolean;
  articleContentFull: string | null;
}
export const Article: React.FC<ArticleProps> = ({
  articleContentHead,
  readMoreButton,
  articleContentFull,
}) => {
  const [hideFullText, setHideFullText] = useState(true);

  const toggleHideFullText = () => {
    setHideFullText(!hideFullText);
  };

  return (
    <>
      <FlexBox>
        <StyledArticle>{articleContentHead}</StyledArticle>
        {readMoreButton ? (
          <ReadMoreButton onClick={toggleHideFullText}>
            {hideFullText ? "Read" : "Hide"} more...
          </ReadMoreButton>
        ) : null}
        <StyledArticle hideFullText={hideFullText}>
          {articleContentFull}
        </StyledArticle>
      </FlexBox>
    </>
  );
};
