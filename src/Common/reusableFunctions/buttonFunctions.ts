export const handleNextPage = (
  offset: number,
  limit: number,
  maxOffset: number,
  handlePageChange: (newOffset: number) => void
) => {
  const newOffset = offset + limit;
  handlePageChange(Math.min(newOffset, maxOffset));
};

export const handlePrevPage = (
  offset: number,
  limit: number,
  handlePageChange: (newOffset: number) => void
) => {
  const newOffset = Math.max(0, offset - limit);
  handlePageChange(newOffset);
};

export const handleLastPage = (
  maxOffset: number,
  handlePageChange: (newOffset: number) => void
) => {
  const newOffset = maxOffset;
  handlePageChange(newOffset);
};

export const handleFirstPage = (
  handlePageChange: (newOffset: number) => void
) => {
  const newOffset = 0;
  handlePageChange(newOffset);
};
