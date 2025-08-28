import Cards from "./Cards";
import "../styles/levels.css";
import "../styles/home.css";
import { useEffect, useState } from "react";
import InfoModal from "./InfoModal";

export default function Level({
  galaxy,
  handleGameOver,
  isGameOver,
  score,
  updateGameScore,
  bestScore,
  cardInfo,
  getCardsInfo,
}) {
  const [selected, setSelected] = useState([]);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

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

  const openModal = () => {
    setIsInfoModalOpen(true);
  };

  const closeModal = () => {
    setIsInfoModalOpen(false);
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
              getCardsInfo={() => getCardsInfo(item.description)}
              openModal={openModal}
            />
          ))
        )}
      </div>
      {isInfoModalOpen && <InfoModal info={cardInfo} closeModal={closeModal} />}
    </div>
  );
}
