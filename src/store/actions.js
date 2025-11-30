// src/store/actions.js
export const makeMove = (index) => ({
  type: 'MAKE_MOVE',
  payload: { index },
});

export const restartGame = () => ({
  type: 'RESTART',
});
