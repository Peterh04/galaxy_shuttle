export default function LevelButtons({ btnName, onClick }) {
  return (
    <button className="levelBtn" type="" onClick={onClick}>
      {btnName}
    </button>
  );
}
