export const ItemNamesEdit = (name: string) => {
  const editName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`.replace(
    "-",
    " "
  );
  return editName;
};
