import Levels from "./Levels";
import "../styles/home.css";
export default function Home() {
  return (
    <div className="home">
      <h2>GALAXY SHUFFLE</h2>
      <Levels />
      <button className="muteBtn">Mute</button>
    </div>
  );
}
