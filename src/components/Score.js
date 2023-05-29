import React from "react";

export default function Score({ current, best }) {
  return (
    <div>
      <div>Current score: {current}</div>
      <div>Best score: {best}</div>
    </div>
  );
}
