import React, { useState } from "react";
import Grid from "../../components/Grid/Grid";
import { createClearGrid, forwardOne } from "../../simulation/simulation";
import classes from "./Game.module.css";

const SIZE = 30;

function Game() {
  const [grid, setGrid] = useState(createClearGrid(SIZE));
  const [initialState, setInitialState] = useState(createClearGrid(SIZE));
  const [isStarted, setIsStarted] = useState(false);
  const [count, setCount] = useState(0);

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

  const handleForward = () => {
    if (!isStarted) {
      setInitialState(copyGrid(grid));
    }
    setGrid(forwardOne(grid));
    setCount((count) => count + 1);
    setIsStarted(true);
  };

  const handleReset = () => {
    setGrid(copyGrid(initialState));
    setIsStarted(false);
    setCount(0);
  };

  return (
    <div className={classes.Game}>
      <Grid grid={grid} handleClick={setCell} />
      <div className={classes.GameControls}>
        <button onClick={handleForward}>Forward</button>
        <button onClick={handleReset} disabled={!isStarted}>
          Reset
        </button>
      </div>
      <p>Generation: {count}</p>
    </div>
  );
}

export default Game;
