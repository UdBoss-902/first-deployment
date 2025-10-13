// src/components/MoodLogger/index.jsx
import React, { useState } from "react";
import { saveData, loadData } from "../../utils/storage";

const moods = ["😀", "😐", "😔", "😡"];

export default function MoodLogger() {
  const [mood, setMood] = useState(loadData("mood") || "");

  const selectMood = (m) => {
    setMood(m);
    saveData("mood", m);
  };

  return (
    <div>
      <p>Today’s Mood: {mood}</p>
      {moods.map((m) => (
        <button key={m} onClick={() => selectMood(m)} style={{ fontSize: "20px", margin: "5px" }}>
          {m}
        </button>
      ))}
    </div>
  );
}
