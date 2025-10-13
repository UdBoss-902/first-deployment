// src/components/HabitCounter/index.jsx
import React, { useState } from "react";
import { saveData, loadData } from "../../utils/storage";

export default function HabitCounter({ habit }) {
  const [count, setCount] = useState(loadData(habit) || 0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    saveData(habit, newCount);
  };

  const reset = () => {
    setCount(0);
    saveData(habit, 0);
  };

  return (
    <div>
      <p style={{ fontSize: "24px" }}>{count}</p>
      <button onClick={increment}>+ Add</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
