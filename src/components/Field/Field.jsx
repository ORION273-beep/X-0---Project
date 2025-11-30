// src/components/Field/Field.jsx
import { Cell } from './Cell';

export const Field = () => {
  return (
    <div className="field">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Cell key={i} index={i} />
      ))}
    </div>
  );
};
