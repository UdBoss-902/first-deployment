// src/components/WeeklySummary/index.jsx
import React, { useEffect, useState } from "react";
import { loadData } from "../../utils/storage";

export default function WeeklySummary() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const sleepData = loadData("sleepData") || [];
    const water = loadData("Water") || 0;
    const exercise = loadData("Exercise") || 0;
    const moodLogs = loadData("moodLogs") || [];
    const tasks = loadData("tasks") || [];

    // Sleep average
    const last7 = sleepData.slice(-7);
    const avgSleep =
      last7.length > 0
        ? (last7.reduce((sum, d) => sum + d.hours, 0) / last7.length).toFixed(1)
        : 0;

    // Task completion in last 7 days
    const today = new Date();
    const last7Tasks = tasks.filter((t) => {
      const taskDate = new Date(t.date);
      return (today - taskDate) / (1000 * 60 * 60 * 24) <= 7;
    });
    const completed = last7Tasks.filter((t) => t.done).length;
    const total = last7Tasks.length;
    const completionRate = total > 0 ? (completed / total) * 100 : 0;

    // Badge logic
    let badge = "—";
    if (completionRate >= 80) badge = "🏆 Productivity Master";
    else if (completionRate >= 50) badge = "🔥 Consistency Builder";
    else if (completionRate > 0) badge = "✅ Getting Started";

    setSummary({
      avgSleep,
      water,
      exercise,
      lastMood: moodLogs.length > 0 ? moodLogs[moodLogs.length - 1] : "—",
      completedTasks: completed,
      totalTasks: total,
      badge,
    });
  }, []);

  return (
    <div>
      <h3>Weekly Summary</h3>
      <p>🛌 Average Sleep: {summary.avgSleep} hrs</p>
      <p>💧 Total Water Logged: {summary.water}</p>
      <p>🏋️ Total Exercise Sessions: {summary.exercise}</p>
      <p>😊 Last Mood: {summary.lastMood}</p>
      <p>📋 Tasks Completed: {summary.completedTasks}/{summary.totalTasks}</p>
      <p>🎖️ Badge: {summary.badge}</p>
    </div>
  );
}
