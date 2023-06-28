import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: fixed;
  right: 40px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  border-radius: 1vw;
  background-color: #010101b0;
  color: white;
  font-size: 36px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <StyledButton onClick={scrollToTop}>
         ⬆
        </StyledButton>
      )}
    </>
  );
};

export default ScrollToTopButton;