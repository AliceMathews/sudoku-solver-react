import React from "react";
import Cell from "./Cell";

export default function Box(props) {
  return (
    <div className="box">
      <Cell
        row={3 * props.id[0]}
        column={3 * props.id[1]}
        values={props.values}
        addValue={props.addValue}
      />
      <Cell
        row={3 * props.id[0]}
        column={3 * props.id[1] + 1}
        values={props.values}
        addValue={props.addValue}
      />
      <Cell
        row={3 * props.id[0]}
        column={3 * props.id[1] + 2}
        values={props.values}
        addValue={props.addValue}
      />
      <Cell
        row={3 * props.id[0] + 1}
        column={3 * props.id[1]}
        values={props.values}
        addValue={props.addValue}
      />
      <Cell
        row={3 * props.id[0] + 1}
        column={3 * props.id[1] + 1}
        values={props.values}
        addValue={props.addValue}
      />
      <Cell
        row={3 * props.id[0] + 1}
        column={3 * props.id[1] + 2}
        values={props.values}
        addValue={props.addValue}
      />
      <Cell
        row={3 * props.id[0] + 2}
        column={3 * props.id[1]}
        values={props.values}
        addValue={props.addValue}
      />
      <Cell
        row={3 * props.id[0] + 2}
        column={3 * props.id[1] + 1}
        values={props.values}
        addValue={props.addValue}
      />
      <Cell
        row={3 * props.id[0] + 2}
        column={3 * props.id[1] + 2}
        values={props.values}
        addValue={props.addValue}
      />
    </div>
  );
}
