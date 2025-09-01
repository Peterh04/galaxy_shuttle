import { faRotateRight, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GameModal({ message, handleRestart, handleQuitGame }) {
  const isWin = message === "Won";

  return (
    <div className="overlay">
      <div className={`gameModal ${isWin ? "win" : "lose"}`}>
        <h2 className="gameModalTitle">
          {isWin ? "🚀 Victory!" : "💀 Game Over"}
        </h2>
        <p className="gameModalMessage">You have {message} the game</p>

        <div className="gameModalActions">
          <button className="gamePrimaryBtn" onClick={handleRestart}>
            <FontAwesomeIcon icon={faRotateRight} /> Restart
          </button>
          <button className="gameSecondaryBtn" onClick={handleQuitGame}>
            <FontAwesomeIcon icon={faDoorOpen} /> Quit
          </button>
        </div>
      </div>
    </div>
  );
}
