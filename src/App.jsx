import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Level from "./components/Level";
import Home from "./components/Home";
import shuffleArr from "../fisherYates";
import Modal from "./components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import ReactHowler from "react-howler";
import spaceMusic from "./assets/space-music.mp3";

const URL = "https://images-api.nasa.gov/search?q=galaxy";

function App() {
  const [galaxy, setGalaxy] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [gameScores, setGameScores] = useState({
    score: 0,
    bestGameScore: 0,
  });
  const [difficulty, setDifficulty] = useState("");
  const [cardInfo, setCardInfo] = useState("");
  const [isMute, setIsMute] = useState(true);
  const [isSpeechPlaying, setIsSpeechPlaying] = useState(false);

  let synth = window.speechSynthesis;

  const playSpeech = (txt) => {
    if (synth.speaking) synth.cancel();

    let utterance = new SpeechSynthesisUtterance(txt);

    utterance.rate = 1;
    utterance.onstart = () => setIsSpeechPlaying(true);
    utterance.onend = () => setIsSpeechPlaying(false);
    utterance.onerror = () => setIsSpeechPlaying(false);
    synth.speak(utterance);
  };

  const stopSpeech = () => {
    synth.cancel();
    setIsSpeechPlaying(false);
  };

  const handleSpeech = () => {
    setIsSpeechPlaying((prev) => !prev);
  };

  const handleMute = () => {
    setIsMute((prev) => !prev);
  };

  const getCardsInfo = (info) => {
    setCardInfo(info);
  };

  const changeDifficulty = (type) => {
    setDifficulty(type);
  };

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  const handleGameWin = () => {
    setIsGameWon(true);
    setIsGameOver(true);
  };

  const handleRestart = () => {
    setIsGameOver(false);
    setIsGameWon(false);
    setGameScores((prev) => ({ ...prev, score: 0 }));
  };

  const handleQuitGame = () => {
    setGameScores((prev) => ({ ...prev, score: 0, bestGameScore: 0 }));
    setDifficulty("");
    setCardInfo("");
    setIsGameOver(false);
  };

  const updateGameScore = () => {
    setGameScores((prev) => {
      const newScore = prev.score + 1;
      return {
        score: newScore,
        bestGameScore: Math.max(prev.bestGameScore, newScore),
      };
    });
  };

  const LEVELS = {
    EASY: 6,
    MEDIUM: 12,
    HARD: 20,
  };

  useEffect(() => {
    synth.cancel();
    setIsSpeechPlaying(false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok)
          throw new Error(`HTTP error!  status: ${response.status}`);
        const result = await response.json();

        setGalaxy(
          result.collection.items
            .slice(0, 50)
            .filter(
              (galaxy) =>
                (galaxy.data[0].title.split(" ").length <= 3 &&
                  galaxy.data[0].title.split(" ")[0].startsWith("Galaxy")) ||
                galaxy.data[0].title.split(" ")[0].startsWith("Frankenstein") ||
                galaxy.data[0].title.split(" ")[0].startsWith("Andromeda")
            )
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const cardsForDifficulty = useMemo(() => {
    if (!difficulty) return [];
    console.log(galaxy);
    return shuffleArr(galaxy).slice(0, LEVELS[difficulty]);
  }, [galaxy, difficulty]);

  const renderPage = () => {
    if (isGameOver && isGameWon == false)
      return (
        <Modal
          message="lost"
          handleRestart={handleRestart}
          handleQuitGame={handleQuitGame}
        />
      );

    if (isGameOver && isGameWon == true)
      return (
        <Modal
          message="Won"
          handleRestart={handleRestart}
          handleQuitGame={handleQuitGame}
        />
      );

    if (!difficulty) return <Home changeDifficulty={changeDifficulty} />;

    return (
      <Level
        galaxy={cardsForDifficulty}
        handleGameOver={handleGameOver}
        handleGameWin={handleGameWin}
        isGameWon={isGameWon}
        score={gameScores.score}
        bestScore={gameScores.bestGameScore}
        updateGameScore={updateGameScore}
        cardInfo={cardInfo}
        getCardsInfo={getCardsInfo}
        isSpeechPlaying={isSpeechPlaying}
        handleSpeech={handleSpeech}
        playSpeech={playSpeech}
        stopSpeech={stopSpeech}
      />
    );
  };

  return (
    <>
      {renderPage()}

      <ReactHowler
        src={spaceMusic}
        playing={!isMute}
        loop={true}
        volume={0.1}
      />
      <button onClick={() => handleMute()} className="musicBtn">
        {isMute ? (
          <FontAwesomeIcon icon={faVolumeMute} className="fa" />
        ) : (
          <FontAwesomeIcon icon={faVolumeHigh} className="fa" />
        )}
      </button>
    </>
  );
}

export default App;
