const initialState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CELL':
      const newBoard = [...state.board];
      newBoard[action.payload] = state.currentPlayer;
      return { ...state, board: newBoard };

    case 'SWITCH_PLAYER':
      return { ...state, currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X' };

    case 'SET_WINNER':
      return { ...state, winner: action.payload };

    case 'RESTART':
      return initialState;

    default:
      return state;
  }
};
