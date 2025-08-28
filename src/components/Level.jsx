import Cards from "./Cards";
import "../styles/levels.css";
import "../styles/home.css";
import { useEffect, useState } from "react";

export default function Level({
  galaxy,
  handleGameOver,
  isGameOver,
  score,
  updateGameScore,
  bestScore,
}) {
  const [selected, setSelected] = useState([]);

  const selectCard = (card) => {
    if (selected.includes(card)) {
      handleGameOver();
      console.log(isGameOver);

      throw new Error("Already selected");
    }
    setSelected((prev) => [...prev, card]);
    updateGameScore();
  };

  const shuffle = (cards) => {
    return cards.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    console.log("Selected updated:", selected);
  }, [selected]);

  if (!galaxy || galaxy.length == 0) return null;
  return (
    <div className="levelPage">
      <h2>Game Score : {score}</h2>
      <h3>Best Game score : {bestScore}</h3>
      <div className="showCaseCards">
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
    </div>
  );
}
