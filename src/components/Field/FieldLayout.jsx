
import './FieldLayout.css';

const FieldLayout = ({ board, onCellClick }) => {
	const renderCell = (index) => {
		return (
			<button
				key={index}
				className="cell"
				onClick={() => onCellClick(index)}
				disabled={board[index] !== null}
			>
				{board[index] || ''}
			</button>
		);
	};

	return (
		<div className="field">
			{[0, 1, 2].map((row) => (
				<div key={row} className="row">
					{[0, 1, 2].map((col) => renderCell(row * 3 + col))}
				</div>
			))}
		</div>
	);
};

export default FieldLayout;
