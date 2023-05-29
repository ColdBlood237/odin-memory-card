import React from "react";

export default function Card({ handleClick, link, name, id }) {
  return (
    <div
      onClick={() => {
        handleClick(id);
      }}
      className="card"
      id={id}
    >
      <img src={link} alt={name}></img>
      <p>{name}</p>
    </div>
  );
}
