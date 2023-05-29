import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Header from "./components/Header";
import Card from "./components/Card";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cardsClicked, setCardsClicked] = useState([]);
  const [deck, setDeck] = useState([
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      name: "Bulbasaur",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      name: "Ivysaur",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      name: "Venusaur",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      name: "Charmander",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      name: "Charmeleon",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      name: "Charizard",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      name: "Squirtle",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      name: "Wartortle",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      name: "Blastoise",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      name: "Caterpie",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      name: "Metapod",
      key: uniqid(),
    },
    {
      link: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      name: "Butterfree",
      key: uniqid(),
    },
  ]);

  function shuffleDeck(deck) {
    const newDeck = [...deck];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    setDeck(newDeck);
  }

  function handleClick(id) {
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

  useEffect(() => {
    shuffleDeck(deck);
    console.log("Component Did Mount");
    console.log("-------------------");
  }, []);

  return (
    <div className="App">
      <Header />
      <Score current={score} best={best} />
      {deck.map((card) => (
        <Card
          shuffleDeck={shuffleDeck}
          deck={deck}
          setDeck={setDeck}
          setCardsClicked={setCardsClicked}
          setBest={setBest}
          setScore={setScore}
          cardsClicked={cardsClicked}
          score={score}
          best={best}
          link={card.link}
          name={card.name}
          key={card.key}
          id={card.key}
        />
      ))}
    </div>
  );
}

export default App;
