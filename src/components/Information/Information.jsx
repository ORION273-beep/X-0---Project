// src/components/Information/Information.jsx
import { useSelector } from 'react-redux';

export const Information = () => {
  const { currentPlayer, winner } = useSelector((state) => ({
    currentPlayer: state.currentPlayer,
    winner: state.winner,
  }));

  const getStatus = () => {
    if (winner === 'draw') return 'Ничья!';
    if (winner) return <>Победил <strong>{winner}</strong>!</>;
    return <>Ходит игрок: <strong>{currentPlayer}</strong></>;
  };

  return (
    <div className="information">
      <h2>{getStatus()}</h2>
    </div>
  );
};
