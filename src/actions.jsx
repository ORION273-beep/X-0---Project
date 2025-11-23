export const setCell = (index) => ({ type: 'SET_CELL', payload: index });
export const switchPlayer = () => ({ type: 'SWITCH_PLAYER' });
export const setWinner = (winner) => ({ type: 'SET_WINNER', payload: winner });
export const restart = () => ({ type: 'RESTART' });
