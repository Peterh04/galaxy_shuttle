import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ message, handleRestart, handleQuitGame }) {
  return (
    <div className="restartModal modal">
      <h3>You have {message} the game</h3>

      <button className="modalRestartBtn" onClick={() => handleRestart()}>
        <FontAwesomeIcon icon={faRotateRight} className="fa" />
      </button>

      <button onClick={() => handleQuitGame()}>Quit</button>
    </div>
  );
}
