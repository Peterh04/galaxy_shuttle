import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoModal({ info, closeModal }) {
  return (
    <div className="infoModal">
      <h4>{info}</h4>
      <button className="modalCloseBtn" onClick={() => closeModal()}>
        <FontAwesomeIcon icon={faClose} className="fa" />
      </button>
    </div>
  );
}
