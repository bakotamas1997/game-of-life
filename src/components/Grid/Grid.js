import React from "react";
import Cell from "../Cell/Cell";

import classes from "./Grid.module.css";

const Grid = (props) => {
  const tiles = props.grid.map((row, rowId) =>
    row.map((value, colId) => (
      <Cell
        key={`${rowId}-${colId}`}
        onClick={() => {
          props.handleClick(rowId, colId);
        }}
        value={value}
      />
    ))
  );

  return (
    <div
      className={classes.Grid}
      style={{
        gridTemplateRows: `repeat(${props.grid.length}, 1fr)`,
        gridTemplateColumns: `repeat(${props.grid[0].length}, 1fr)`,
      }}
    >
      {tiles}
    </div>
  );
};

export default Grid;
