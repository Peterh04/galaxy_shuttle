import Cards from "./Cards";
import "../styles/levels.css";
import "../styles/home.css";
import { useEffect, useState } from "react";
import InfoModal from "./InfoModal";

export default function Level({
  galaxy,
  handleGameOver,
  handleGameWin,
  score,
  updateGameScore,
  bestScore,
  cardInfo,
  getCardsInfo,
  isSpeechPlaying,
  handleSpeech,
  playSpeech,
  stopSpeech,
}) {
  const [selected, setSelected] = useState([]);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const selectCard = (card) => {
    if (selected.includes(card)) {
      handleGameOver();
    } else {
      setSelected((prev) => [...prev, card]);
      updateGameScore();
      if (selected.length == 5) {
        handleGameWin();
      }
    }
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

  if (!galaxy || galaxy.length == 0) return null;
  return (
    <div className="levelPage">
      <div className="gameScoreBoard">
        <h2>
          Score : <span>{score}</span>
        </h2>
        <h2>
          Best Score : <span>{bestScore}</span>
        </h2>
      </div>
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
      {isInfoModalOpen && (
        <InfoModal
          info={cardInfo}
          closeModal={closeModal}
          isSpeechPlaying={isSpeechPlaying}
          handleSpeech={handleSpeech}
          playSpeech={playSpeech}
          stopSpeech={stopSpeech}
        />
      )}
    </div>
  );
}
