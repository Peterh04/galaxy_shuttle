import { faClose, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoModal({
  info,
  closeModal,
  isSpeechPlaying,
  playSpeech,
  stopSpeech,
}) {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button
          className="modalCloseBtn"
          onClick={() => {
            stopSpeech();
            closeModal();
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>

        <h2 className="modalTitle">Galaxy Info</h2>
        <p className="modalText">{info}</p>

        <div className="modalActions">
          {isSpeechPlaying ? (
            <button className="voiceBtn stop" onClick={stopSpeech}>
              <FontAwesomeIcon icon={faStop} /> Stop Audio
            </button>
          ) : (
            <button className="voiceBtn play" onClick={() => playSpeech(info)}>
              <FontAwesomeIcon icon={faPlay} /> Play Audio
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
