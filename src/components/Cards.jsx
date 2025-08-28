import "../styles/levels.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import ReactHowler from "react-howler";
import clickSound from "../assets/click.mp3";
import { useState } from "react";

faClose;

export default function Cards({ image, name, click, getCardsInfo, openModal }) {
  const [isPlaying, setIsplaying] = useState(false);

  const playClickSound = () => {
    setIsplaying(true);
  };
  return (
    <div
      className="card"
      onClick={() => {
        click();
        playClickSound();
      }}
    >
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
      <ReactHowler
        src={clickSound}
        playing={isPlaying}
        loop={false}
        volume={0.3}
        onEnd={() => setIsplaying(false)}
      />
      ;
    </div>
  );
}
