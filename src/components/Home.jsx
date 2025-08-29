import Levels from "./Levels";
import "../styles/home.css";

export default function Home({ changeDifficulty }) {
  return (
    <div className="home">
      <h2>GALAXY SHUFFLE</h2>

      <Levels changeDifficulty={changeDifficulty} />
    </div>
  );
}
