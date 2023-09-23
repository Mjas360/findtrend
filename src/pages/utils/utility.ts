export const getImage = (name: string, folder: string = "") => {
  if (folder === "") {
    return `/${name}`;
  }
  return `/assets/${folder}/${name}`;
};
