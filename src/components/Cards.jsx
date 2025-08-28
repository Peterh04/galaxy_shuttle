import "../styles/levels.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";

faClose;

export default function Cards({ image, name, click, getCardsInfo, openModal }) {
  return (
    <div className="card" onClick={click}>
      <div className="imageContainer">
        <img className="cardImg" src={image}></img>
      </div>
      <h4 className={name}>{name}</h4>

      <button
        className="infoBtn"
        onClick={(e) => {
          e.stopPropagation();
          getCardsInfo();
          openModal();
        }}
      >
        <FontAwesomeIcon icon={faQuestion} className="fa" />
      </button>
    </div>
  );
}
