// src/components/GoalTracker/index.jsx
import React, { useState, useEffect } from "react";
import { saveData, loadData } from "../../utils/storage";

export default function GoalTracker({ habit, defaultGoal = 5 }) {
  const [goal, setGoal] = useState(loadData(`${habit}-goal`) || defaultGoal);
  const [count, setCount] = useState(loadData(habit) || 0);

  useEffect(() => {
    const savedCount = loadData(habit) || 0;
    setCount(savedCount);
  }, [habit]);

  const handleGoalChange = (e) => {
    const newGoal = Number(e.target.value);
    setGoal(newGoal);
    saveData(`${habit}-goal`, newGoal);
  };

  const progress = Math.min((count / goal) * 100, 100);

  return (
    <div>
      <p>
        {habit} Progress: {count}/{goal}
      </p>
      <div style={{ background: "#eee", borderRadius: "8px", height: "20px", width: "100%" }}>
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: progress >= 100 ? "#4CAF50" : "#2196F3",
            borderRadius: "8px",
            transition: "width 0.3s ease",
          }}
        />
      </div>
      <input
        type="number"
        value={goal}
        onChange={handleGoalChange}
        style={{ marginTop: "8px", width: "60px" }}
      />
    </div>
  );
}
