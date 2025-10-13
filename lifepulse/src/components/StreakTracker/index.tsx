// src/components/StreakTracker/index.jsx
import React, { useState, useEffect } from "react";
import { saveData, loadData } from "../../utils/storage";

export default function StreakTracker({ habit }) {
  const [streak, setStreak] = useState(loadData(`${habit}-streak`) || 0);
  const [lastDate, setLastDate] = useState(loadData(`${habit}-lastDate`) || null);

  useEffect(() => {
    saveData(`${habit}-streak`, streak);
    saveData(`${habit}-lastDate`, lastDate);
  }, [streak, lastDate, habit]);

  const logHabit = () => {
    const today = new Date().toDateString();

    if (lastDate === today) {
      // already logged today
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastDate === yesterday.toDateString()) {
      setStreak(streak + 1);
    } else {
      setStreak(1); // reset streak
    }

    setLastDate(today);
  };

  const badge =
    streak >= 7 ? "🏆 Weekly Warrior" :
    streak >= 3 ? "🔥 3-Day Streak" :
    streak >= 1 ? "✅ Started Strong" :
    "—";

  return (
    <div>
      <p>{habit} Streak: {streak} days</p>
      <p>Badge: {badge}</p>
      <button onClick={logHabit}>Log {habit} Today</button>
    </div>
  );
}
