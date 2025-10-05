
import './GameLayout.css';

const GameLayout = ({ information, field, onReset }) => {
	return (
		<div className="game-layout">
			<div className="game-header">{information}</div>
			<div className="game-board">{field}</div>
			<div className="game-footer">
				<button onClick={onReset} className="reset-button">
					Начать заново
				</button>
			</div>
		</div>
	);
};

export default GameLayout;
