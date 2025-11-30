// src/components/Field/Cell.jsx
import { useDispatch, useSelector } from 'react-redux';
import { makeMove } from '../../store/actions';

export const Cell = ({ index }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.board[index]);
  const winner = useSelector((state) => state.winner);

  const handleClick = () => {
    if (value || winner) return;
    dispatch(makeMove(index));
  };

  return (
    <button
      className="cell"
      onClick={handleClick}
      disabled={!!value || !!winner}
    >
      {value}
    </button>
  );
};
