// src/components/HelpButton/index.tsx
import React from "react";

const HelpButton: React.FC = () => {
  const handleHelp = () => {
    alert(
      "👋 Welcome to LifePulse!\n\n" +
      "Here’s how to use the app:\n" +
      "• Log your sleep, water, exercise, and mood daily.\n" +
      "• Use the Action List to plan tasks and check them off.\n" +
      "• Check Weekly Summary for insights and badges.\n" +
      "• Reset Data if you want to start fresh.\n\n" +
      "Stay consistent and watch your progress grow! 🚀"
    );
  };

  return (
    <button
      onClick={handleHelp}
      style={{
        background: "#2196f3",
        color: "#fff",
        border: "none",
        padding: "8px 14px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: 500,
      }}
    >
      ❓ Help
    </button>
  );
};

export default HelpButton;
