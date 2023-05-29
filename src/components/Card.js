import React from "react";

export default function Card({ link, name, id }) {
  return (
    <div className="card" id={id}>
      <img src={link} alt={name}></img>
      <p>{name}</p>
    </div>
  );
}
