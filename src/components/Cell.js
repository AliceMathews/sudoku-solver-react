import React from "react";

export default function Cell(props) {
  return (
    <div className="cell">
      <input
        className="number-input"
        type="text"
        name="number"
        value={props.value}
        onChange={value => props.addValue([props.row, props.column, value])}
        maxLength="1"
      />
    </div>
  );
}
