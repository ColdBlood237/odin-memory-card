import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Score from "./components/Score";

function App() {
  const [deck, setDeck] = useState([<Card link="" name="" />]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
