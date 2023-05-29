import React from "react";

export default function Card({
  shuffleDeck,
  deck,
  setCardsClicked,
  setBest,
  setScore,
  cardsClicked,
  score,
  best,
  link,
  name,
  id,
}) {
  function handleClick() {
    if (cardsClicked.includes(id)) {
      setScore(0);
      setCardsClicked([]);
    } else {
      setCardsClicked([...cardsClicked, id]);
      setScore(score + 1);
      if (score === best) setBest(best + 1);
    }
    shuffleDeck(deck);
  }
  return (
    <div onClick={handleClick} className="card" id={id}>
      <img src={link} alt={name}></img>
      <p>{name}</p>
    </div>
  );
}
