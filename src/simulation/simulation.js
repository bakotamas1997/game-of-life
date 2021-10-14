const createClearGrid = (size) => {
  const clearGrid = new Array(size);
  for (let i = 0; i < clearGrid.length; i++) {
    clearGrid[i] = new Array(size).fill(false);
  }
  return clearGrid;
};

export { createClearGrid };
