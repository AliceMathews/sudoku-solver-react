import React from "react";

export default function Cell() {
  return (
    <div className="cell">
      <input
        className="number-input"
        type="text"
        name="number"
        placeholder="4"
        maxLength="1"
      />
    </div>
  );
}
