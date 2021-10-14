import React, { useState } from "react";
import Grid from "../../components/Grid/Grid";
import { createClearGrid } from "../../simulation/simulation";
import classes from "./Game.module.css";

const SIZE = 30;

function Game() {
  const [grid, setGrid] = useState(createClearGrid(SIZE));

  const setCell = (x, y) => {
    const newGrid = copyGrid(grid);
    newGrid[x][y] = !newGrid[x][y];
    setGrid(newGrid);
  };

  const copyGrid = (grid) => {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      newGrid.push(grid[i].slice());
    }
    return newGrid;
  };

  return (
    <div className={classes.Game}>
      <Grid grid={grid} handleClick={setCell} />
    </div>
  );
}

export default Game;
