import React, { useState, useEffect } from "react";
import Grid from "../../components/Grid/Grid";
import {
  createClearGrid,
  forwardOne,
  getPopulation,
} from "../../simulation/simulation";
import classes from "./Game.module.css";
import Button from "../../components/UI/Button/Button";

const SIZE = 30;

function Game() {
  const [grid, setGrid] = useState(createClearGrid(SIZE));
  const [initialState, setInitialState] = useState(createClearGrid(SIZE));
  const [isStarted, setIsStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [population, setPopulation] = useState(0);

  const setCell = (x, y) => {
    if (!isStarted) {
      const newGrid = copyGrid(grid);
      newGrid[x][y] = !newGrid[x][y];
      setGrid(newGrid);
    }
  };

  const copyGrid = (grid) => {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      newGrid.push(grid[i].slice());
    }
    return newGrid;
  };

  const handleStart = () => {
    if (!isStarted) {
      setInitialState(copyGrid(grid));
    }
    setIsActive(true);
    setIsStarted(true);
  };

  const handlePause = () => {
    setIsActive(false);
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

  const handleClear = () => {
    setInitialState(createClearGrid(SIZE));
    setGrid(createClearGrid(SIZE));
    setIsStarted(false);
    setCount(0);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setGrid((grid) => forwardOne(grid));
        setCount((count) => count + 1);
      }, 500);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    const population = getPopulation(grid);
    setPopulation(population);
  }, [grid]);

  return (
    <div className={classes.Game}>
      <Grid grid={grid} handleClick={setCell} />
      <div className={classes.GameControls}>
        <Button clicked={handleStart} isDisabled={isActive}>
          Start
        </Button>
        <Button clicked={handlePause} isDisabled={!isActive}>
          Pause
        </Button>
        <Button clicked={handleForward} isDisabled={isActive}>
          Forward
        </Button>
        <Button clicked={handleReset} isDisabled={!isStarted || isActive}>
          Reset
        </Button>
        <Button clicked={handleClear} isDisabled={isStarted || isActive}>
          Clear
        </Button>
      </div>
      <p>Generation: {count}</p>
      <p>Population: {population}</p>
    </div>
  );
}

export default Game;
