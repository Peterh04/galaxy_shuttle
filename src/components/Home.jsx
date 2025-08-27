import Levels from "./Levels";
import "../styles/home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import spaceMusic from "../assets/space-music.mp3";
import { Howl } from "howler";
import ReactHowler from "react-howler";

export default function Home({ changeDifficulty }) {
  const [isMute, setIsMute] = useState(true);

  const handleMute = () => {
    setIsMute((prev) => !prev);
  };
  return (
    <div className="home">
      <h2>GALAXY SHUFFLE</h2>
      <Levels changeDifficulty={changeDifficulty} />

      <ReactHowler
        src={spaceMusic}
        playing={!isMute}
        loop={true}
        volume={0.1}
      />
      <button className="muteBtn" onClick={() => handleMute()}>
        {isMute ? (
          <FontAwesomeIcon icon={faVolumeMute} className="fa" />
        ) : (
          <FontAwesomeIcon icon={faVolumeHigh} className="fa" />
        )}
      </button>
    </div>
  );
}
