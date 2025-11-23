import { store } from '../../store';

export const Information = () => {
  const { currentPlayer, winner } = store.getState();

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
