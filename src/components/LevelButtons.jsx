import { Howl } from "howler";
import menuSound from "../assets/menu.mp3";

const clickSfx = new Howl({
  src: [menuSound],
  volume: 0.3,
  html5: true,
});

export default function LevelButtons({ btnName, onClick }) {
  const handleClick = (e) => {
    try {
      clickSfx.play();
    } finally {
      onClick?.(e);
    }
  };

  return (
    <button type="button" className="levelBtn" onClick={handleClick}>
      {btnName}
    </button>
  );
}
