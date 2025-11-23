import { useEffect, useState } from 'react';
import { store } from './store';
import { restart } from './actions';

import { Information } from './components/Information/Information';
import { Field } from './components/Field/Field';

function App() {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const unsubscribe = store.subscribe(() => forceUpdate({}));
    return unsubscribe;
  }, []);

  const handleReset = () => store.dispatch(restart());

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

export default App;
