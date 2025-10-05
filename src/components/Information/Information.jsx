
import InformationLayout from './InformationLayout';

const Information = ({ currentPlayer, winner }) => {
	let message = '';
	if (winner) {
		if (winner === 'draw') {
			message = 'Ничья!';
		} else {
			message = `Победил ${winner === 'X' ? 'крестик' : 'нолик'}!`;
		}
	} else {
		message = `Ход ${currentPlayer === 'X' ? 'крестика' : 'нолика'}`;
	}

	return <InformationLayout message={message} />;
};

export default Information;
