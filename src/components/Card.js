import React, { useState } from "react";

export default function Card({ link, name }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <img src={link} alt={name}></img>
      <p>{name}</p>
    </div>
  );
}
