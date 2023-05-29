import React from "react";

export default function Score({ current, best }) {
  return (
    <div className="score-board">
      <div className="current-score">Current score: {current}</div>
      <div className="best-score">Best score: {best}</div>
    </div>
  );
}
