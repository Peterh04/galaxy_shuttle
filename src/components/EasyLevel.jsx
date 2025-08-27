import Cards from "./Cards";
import "../styles/levels.css";
import "../styles/home.css";
import { useEffect, useState } from "react";

export default function EasyLevel({ galaxy }) {
  const [selected, setSelected] = useState([]);
  const [gameScores, setGameScores] = useState({
    score: 0,
    bestGameScore: 0,
  });

  const selectCard = (card) => {
    if (selected.includes(card)) throw new Error("Game Over failed ");
    setSelected((prev) => [...prev, card]);
    setGameScores({ ...gameScores, score: gameScores.score + 1 });
  };

  const shuffle = (cards) => {
    return cards.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    console.log("Selected updated:", selected);
  }, [selected]);

  if (!galaxy || galaxy.length == 0) return null;
  return (
    <div className="showCaseCards">
      <h2>Game Score : {gameScores.score}</h2>
      {galaxy.map((gal, gIndex) =>
        gal.data?.map((item, iIndex) => (
          <Cards
            key={`${gIndex} - ${iIndex}`}
            name={item.title}
            image={gal.links?.[0]?.href}
            info={item.description}
            click={() => {
              selectCard(gal);
              shuffle(galaxy);
            }}
          />
        ))
      )}
    </div>
  );
}
