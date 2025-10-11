// src/App.jsx
import React from "react";
import HabitCounter from "./components/HabitCounter";

export default function App() {
  return (
    <div>
      <h1>UDBOSS Habit Counter</h1>
      <HabitCounter habit="Drink Water" />
    </div>
  );
}
