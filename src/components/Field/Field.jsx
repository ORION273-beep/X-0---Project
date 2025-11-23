import { store } from '../../store';
import { setCell, switchPlayer, setWinner } from '../../actions';
import { calculateWinner, isBoardFull } from '../../utils';

const Cell = ({ index }) => {
  const { board, winner } = store.getState();

  const handleClick = () => {
    if (board[index] || winner) return;

    store.dispatch(setCell(index));

    const newWinner = calculateWinner(store.getState().board);
    if (newWinner) {
      store.dispatch(setWinner(newWinner));
      return;
    }

    if (isBoardFull(store.getState().board)) {
      store.dispatch(setWinner('draw'));
      return;
    }

    store.dispatch(switchPlayer());
  };

  return (
    <button className="cell" onClick={handleClick} disabled={!!board[index] || !!winner}>
      {board[index]}
    </button>
  );
};

export const Field = () => {
  return (
    <div className="field">
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <Cell key={i} index={i} />
      ))}
    </div>
  );
};
