import {
  faClose,
  faPlay,
  faStop,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function InfoModal({
  info,
  closeModal,
  isSpeechPlaying,
  handleSpeech,
  playSpeech,
  stopSpeech,
}) {
  return (
    <div className="infoModal">
      <h4>{info}</h4>
      <button
        className="modalCloseBtn"
        onClick={() => {
          stopSpeech();
          closeModal();
        }}
      >
        <FontAwesomeIcon icon={faClose} className="fa" />
      </button>
      {isSpeechPlaying ? (
        <button className="voiceBtn" onClick={stopSpeech}>
          <FontAwesomeIcon icon={faStop} />
        </button>
      ) : (
        <button className="voiceBtn" onClick={() => playSpeech(info)}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      )}
    </div>
  );
}
