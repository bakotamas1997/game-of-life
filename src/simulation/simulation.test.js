import { createClearGrid } from "./simulation";

const size = 3;

test("createClearGrid creates a grid with false values with given size", () => {
  const expectedGrid = Array(size).fill(Array(size).fill(false));
  const testGrid = createClearGrid(size);

  expect(testGrid).toEqual(expectedGrid);
});
