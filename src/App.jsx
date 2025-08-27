import { useEffect, useMemo, useState } from "react";
import "./App.css";
import EasyLevel from "./components/EasyLevel";
import Home from "./components/Home";
import shuffleArr from "../fisherYates";
import Modal from "./components/Modal";

const URL = "https://images-api.nasa.gov/search?q=galaxy";

function App() {
  const [galaxy, setGalaxy] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameScores, setGameScores] = useState({
    score: 0,
    bestGameScore: 0,
  });

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  const handleRestart = () => {
    setIsGameOver(false);
    setGameScores((prev) => ({ ...prev, score: 0 })); // reset only score
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
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok)
          throw new Error(`HTTP error!  status: ${response.status}`);
        const result = await response.json();

        setGalaxy(result.collection.items.slice(0, 50));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const easyCards = useMemo(() => {
    return shuffleArr(galaxy).slice(0, LEVELS.EASY);
  }, [galaxy, LEVELS.EASY]);
  return (
    <>
      {isGameOver ? (
        <Modal message={"lost"} handleRestart={handleRestart} />
      ) : (
        <EasyLevel
          galaxy={easyCards}
          handleGameOver={handleGameOver}
          isGameOver={isGameOver}
          score={gameScores.score}
          bestScore={gameScores.bestGameScore}
          updateGameScore={updateGameScore}
        />
      )}
    </>
  );
}

export default App;
