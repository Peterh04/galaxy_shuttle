import LevelButtons from "./LevelButtons";
import "../styles/levels.css";

export default function Levels({ changeDifficulty }) {
  return (
    <nav className="levelNav">
      <LevelButtons btnName={"Easy"} onClick={() => changeDifficulty("EASY")} />
      <LevelButtons
        btnName={"Medium"}
        onClick={() => changeDifficulty("MEDIUM")}
      />
      <LevelButtons btnName={"Hard"} onClick={() => changeDifficulty("HARD")} />
    </nav>
  );
}
