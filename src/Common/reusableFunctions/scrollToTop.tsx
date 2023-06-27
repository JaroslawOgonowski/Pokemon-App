export const scrollToTop = (topRef: React.RefObject<HTMLDivElement>) => {
  if (topRef.current) {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};