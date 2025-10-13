// src/components/ActionList/index.jsx
import React, { useState, useEffect } from "react";
import { saveData, loadData } from "../../utils/storage";

export default function ActionList() {
  const today = new Date().toDateString();
  const [tasks, setTasks] = useState(loadData("tasks") || []);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    saveData("tasks", tasks);
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, done: false, date: today }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div>
      <h3>Today's Actions</h3>
      <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks
          .filter((task) => task.date === today)
          .map((task, index) => (
            <li key={index} style={{ marginBottom: "6px" }}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(index)}
              />
              <span
                style={{
                  textDecoration: task.done ? "line-through" : "none",
                  marginLeft: "8px",
                }}
              >
                {task.text}
              </span>
              <button
                onClick={() => removeTask(index)}
                style={{ marginLeft: "12px", color: "red" }}
              >
                ✕
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
