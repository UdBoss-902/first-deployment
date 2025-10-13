// src/components/SleepInput/index.jsx
import React, { useState } from "react";
import { saveData, loadData } from "../../utils/storage";

export default function SleepInput({ onUpdate }) {
  const [hours, setHours] = useState("");

  const handleSave = () => {
    const prev = loadData("sleepData") || [];
    const newData = [...prev, { day: new Date().toLocaleDateString(), hours: Number(hours) }];
    saveData("sleepData", newData);
    setHours("");
    onUpdate(newData);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Hours slept"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
