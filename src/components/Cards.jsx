import "../styles/levels.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";

faClose;

export default function Cards({ image, name, info, click }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card" onClick={click}>
      <div className="imageContainer">
        <img className="cardImg" src={image}></img>
      </div>
      <h4 className={name}>{name}</h4>

      {isModalOpen && (
        <div className="cardInfo">
          <p>{info}</p>
          <button onClick={() => closeModal()}>
            <FontAwesomeIcon icon={faClose} className="fa" />
          </button>
        </div>
      )}

      <button className="infoBtn" onClick={() => openModal()}>
        <FontAwesomeIcon icon={faQuestion} className="fa" />
      </button>
    </div>
  );
}
