// src/store/reducer.js
import { calculateWinner, isBoardFull } from '../utils';

const initialState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null, // null | 'X' | 'O' | 'draw'
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_MOVE': {
      const { index } = action.payload;
      if (state.board[index] || state.winner) return state;

      const newBoard = [...state.board];
      newBoard[index] = state.currentPlayer;

      const winner = calculateWinner(newBoard);
      if (winner) {
        return { ...state, board: newBoard, winner };
      }

      if (isBoardFull(newBoard)) {
        return { ...state, board: newBoard, winner: 'draw' };
      }

      return {
        ...state,
        board: newBoard,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    }

    case 'RESTART':
      return initialState;

    default:
      return state;
  }
};
