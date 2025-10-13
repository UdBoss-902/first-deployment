// src/App.tsx
import React from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <img src="/Lifepulse-logo.png" alt="LifePulse Logo" className="logo"/>
      <Dashboard />
    </>
  );
};

export default App;
