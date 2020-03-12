import React from "react";

export default function Cell(props) {
  const row = props.row;
  const column = props.column;
  const value = props.values[row][column];
  // console.log(value);
  // console.log(props.row);
  // console.log(props.column);

  return (
    <div className="cell">
      <input
        className="number-input"
        type="text"
        name="number"
        value={value}
        onChange={event =>
          props.addValue(props.row, props.column, event.target.value)
        }
        maxLength="1"
      />
    </div>
  );
}
