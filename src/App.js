import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Header from "./components/Header";
import Card from "./components/Card";
import Score from "./components/Score";

function App() {
  const [deck, setDeck] = useState([
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      name="Charmander"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
      name="Venusaur"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      name="Ivysaur"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
      name="Butterfree"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
      name="Blastoise"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      name="Squirtle"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
      name="Wartortle"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
      name="Charizard"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      name="Bulbasaur"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
      name="Metapod"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
      name="Charmeleon"
    />,
    <Card
      key={uniqid()}
      link="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
      name="Caterpie"
    />,
  ]);

  function shuffleDeck(deck) {
    const newDeck = [...deck];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    setDeck(newDeck);
  }

  useEffect(() => {
    shuffleDeck(deck);
  }, []);

  return (
    <div className="App">
      <Header />
      {deck}
    </div>
  );
}

export default App;
