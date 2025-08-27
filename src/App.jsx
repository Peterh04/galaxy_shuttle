import { useEffect, useState } from "react";
import "./App.css";
import EasyLevel from "./components/EasyLevel";
import Home from "./components/Home";
import shuffleArr from "../fisherYates";

const URL = "https://images-api.nasa.gov/search?q=galaxy";

function App() {
  const [galaxy, setGalaxy] = useState([]);
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
  return (
    <>
      <EasyLevel galaxy={shuffleArr(galaxy).slice(0, LEVELS.EASY)} />
    </>
  );
}

export default App;
