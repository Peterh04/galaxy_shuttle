import Levels from "./Levels";
import "../styles/home.css";
import logo from "../assets/logo.png";

export default function Home({ changeDifficulty }) {
  return (
    <div className="home">
      <div className="stars">
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          return (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            />
          );
        })}
      </div>

      <img src={logo} alt="Galaxy Shuffle Logo" className="homeLogo" />
      <Levels changeDifficulty={changeDifficulty} />
    </div>
  );
}



