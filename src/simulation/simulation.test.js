import { createClearGrid, forwardOne, getPopulation } from "./simulation";

const size = 3;

test("createClearGrid creates a grid with false values with given size", () => {
  const expectedGrid = Array(size).fill(Array(size).fill(false));
  const testGrid = createClearGrid(size);

  expect(testGrid).toEqual(expectedGrid);
});

test("given 0 living cells,when forwardOne is called,then return empty grid", () => {
  const expectedGrid = createClearGrid(size);
  let testGrid = createClearGrid(size);

  testGrid = forwardOne(expectedGrid);

  expect(testGrid).toEqual(expectedGrid);
});

test("given 1 living cell in the top-left, bottom-right corner, when forwardOne is called, then return empty grid", () => {
  const expectedGrid = createClearGrid(size);
  let testGrid = createClearGrid(size);

  testGrid[0][0] = true;
  testGrid[size - 1][size - 1] = true;
  testGrid = forwardOne(testGrid);

  expect(testGrid).toEqual(expectedGrid);
});

test("given 3 living cells in a row, when forwardOne is called, then return 3 cells in a column", () => {
  const expectedGrid = create3ColumnPulsarGrid();
  let testGrid = create3RowPulsarGrid();
  testGrid = forwardOne(testGrid);

  expect(testGrid).toEqual(expectedGrid);
});

test("getPopulation returns correct population amount", () => {
  const testGrid = createClearGrid(size);
  const expectedPopulation = 4;

  testGrid[0][0] = true;
  testGrid[0][1] = true;
  testGrid[1][0] = true;
  testGrid[1][1] = true;

  expect(getPopulation(testGrid)).toBe(expectedPopulation);
});

const create3RowPulsarGrid = () => {
  const grid = createClearGrid(size);

  grid[1][0] = true;
  grid[1][1] = true;
  grid[1][2] = true;

  return grid;
};

const create3ColumnPulsarGrid = () => {
  const grid = createClearGrid(size);

  grid[0][1] = true;
  grid[1][1] = true;
  grid[2][1] = true;

  return grid;
};
