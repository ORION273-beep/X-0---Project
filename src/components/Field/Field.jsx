
import FieldLayout from './FieldLayout';

const Field = ({ board, onCellClick }) => {
	return <FieldLayout board={board} onCellClick={onCellClick} />;
};

export default Field;
