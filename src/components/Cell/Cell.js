import React from "react";

const Cell = (props) => {
  const backgroundColor = props.value ? "none" : "black";
  return (
    <div
      onClick={props.onClick}
      style={{
        width: 20,
        height: 20,
        border: "0.5px solid white",
        background: backgroundColor,
      }}
    ></div>
  );
};

export default Cell;
