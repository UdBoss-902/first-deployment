// src/components/HabitCounter/index.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { saveData, loadData } from "../../utils/storage";

export default function HabitCounter({ habit = "Drink Water" }) {
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
    <motion.div
      className="habit-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        maxWidth: "200px",
        margin: "20px auto",
      }}
      whileHover={{ scale: 1.05 }}
    >
      <h2>{habit}</h2>
      <p style={{ fontSize: "24px", margin: "10px 0" }}>{count}</p>
      <motion.button
        whileTap={{ scale: 0.9 }}
        style={{
          padding: "10px 20px",
          margin: "5px",
          background: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={increment}
      >
        + Add
      </motion.button>
      <button
        style={{
          padding: "10px 20px",
          margin: "5px",
          background: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={reset}
      >
        Reset
      </button>
    </motion.div>
  );
}
