import LevelButtons from "./LevelButtons";
import "../styles/levels.css";

export default function Levels() {
  return (
    <nav className="levelNav">
      <LevelButtons btnName={"Easy"} />
      <LevelButtons btnName={"Medium"} />
      <LevelButtons btnName={"Hard"} />
    </nav>
  );
}
