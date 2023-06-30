export const scrollToTop = (topRef: React.RefObject<HTMLDivElement>) => {
  if (topRef.current) {
    topRef.current.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  }
};
