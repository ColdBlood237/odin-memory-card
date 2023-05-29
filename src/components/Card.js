import React, { useState } from "react";

export default function Card({ link, name }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div onClick={handleClick}>
      <img src={link} alt={name}></img>
      <p>{name}</p>
    </div>
  );
}
