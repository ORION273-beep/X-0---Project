export default function GameLayout({ information, field, onReset }) {
  return (
    <div className="game">
      {information}
      {field}
      <button className="reset-btn" onClick={onReset}>
        Начать заново
      </button>
    </div>
  );
}
