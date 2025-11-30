// src/App.jsx
import { Information } from './components/Information/Information';
import { Field } from './components/Field/Field';
import { useDispatch } from 'react-redux';
import { restartGame } from './store/actions';

export default function App() {
  const dispatch = useDispatch();

  const handleReset = () => dispatch(restartGame());

  return (
    <div className="game">
      <h1>Крестики-Нолики</h1>
      <Information />
      <Field />
      <button className="reset-btn" onClick={handleReset}>
        Новая игра
      </button>
    </div>
  );
}
