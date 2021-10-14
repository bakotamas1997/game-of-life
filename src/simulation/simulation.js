const createClearGrid = (size) => {
  const clearGrid = new Array(size);
  for (let i = 0; i < clearGrid.length; i++) {
    clearGrid[i] = new Array(size).fill(false);
  }
  return clearGrid;
};

const forwardOne = (oldGrid) => {
  let newGrid = createClearGrid(oldGrid.length);
  for (let i = 0; i < oldGrid.length; i++) {
    for (let j = 0; j < oldGrid[i].length; j++) {
      const neighbours = getNeighbours(i, j, oldGrid);
      selectCellState(oldGrid, newGrid, neighbours, i, j);
    }
  }
  return newGrid;
};

const getNeighbours = (y, x, grid) => {
  let neighbours = 0;
  for (let i = max(0, y - 1); i <= min(grid.length - 1, y + 1); i++) {
    for (let j = max(0, x - 1); j <= min(grid[i].length - 1, x + 1); j++) {
      if (grid[i][j]) {
        const isElementNeighbour = x !== j || y !== i;
        if (isElementNeighbour) {
          neighbours++;
        }
      }
    }
  }
  return neighbours;
};

const selectCellState = (oldGrid, newGrid, neighbours, y, x) => {
  if (neighbours === 2) {
    if (oldGrid[y][x]) {
      newGrid[y][x] = true;
    }
  } else if (neighbours === 3) {
    newGrid[y][x] = true;
  }
};

const max = (a, b) => {
  return a > b ? a : b;
};

const min = (a, b) => {
  return a < b ? a : b;
};

const getPopulation = (grid) => {
  let population = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        population++;
      }
    }
  }
  return population;
};

const getRandomGrid = (size) => {
  const randomizedGrid = createClearGrid(size);
  for (let i = 0; i < randomizedGrid.length; i++) {
    for (let j = 0; j < randomizedGrid[i].length; j++) {
      randomizedGrid[i][j] = Math.round(Math.random() * 10) > 7;
    }
  }
  return randomizedGrid;
};

export { createClearGrid, forwardOne, getPopulation, getRandomGrid };
