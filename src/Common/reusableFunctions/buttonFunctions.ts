export const handleNextPage = (
  startIndex: number,
  itemsInGallery: number,
  maxIndex: number,

  handlePageChange: (newStartIndex: number) => void
) => {
  const newStartIndex = startIndex + itemsInGallery;
  handlePageChange(Math.min(newStartIndex, maxIndex));
};

export const handlePrevPage = (
  startIndex: number,
  itemsInGallery: number,
  handlePageChange: (newStartIndex: number) => void
) => {
  const newStartIndex = Math.max(0, startIndex - itemsInGallery);
  handlePageChange(newStartIndex);
};

export const handleLastPage = (
  maxIndex: number,
  handlePageChange: (newStartIndex: number) => void
) => {
  const newStartIndex = maxIndex;
  handlePageChange(newStartIndex);
};

export const handleFirstPage = (
  handlePageChange: (newStartIndex: number) => void
) => {
  const newStartIndex = 0;
  handlePageChange(newStartIndex);
};
