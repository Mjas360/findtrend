export const getImage = (name: string, folder: string = "") => {
  if (folder === "") {
    return `/${name}`;
  }
  return `/assets/${folder}/${name}`;
};

export const headingVariants = (rotateValue?: number) => ({
  initial: { opacity: 0, y: -20, rotate: 0 },
  animate: { opacity: 1, y: 0, rotate: rotateValue },
});

export const headingTransition = {
  duration: 0.5,
};

export const hideCard = (
  index: number,
  setHiddenCards: React.Dispatch<React.SetStateAction<number[]>>
) => {
  setHiddenCards((prevHiddenCards) => [...prevHiddenCards, index]);
};
