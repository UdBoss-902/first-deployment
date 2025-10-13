// src/components/ResetButton/index.tsx
import React from "react";
import { resetAllData } from "../../utils/storage";

const ResetButton: React.FC = () => {
  const handleReset = () => {
    const confirmReset = window.confirm(
      "⚠️ This will delete all your progress and records. Are you sure?"
    );
    if (confirmReset) {
      resetAllData();
      window.location.reload(); // reload app to reflect cleared state
    }
  };

  return (
    <button
      onClick={handleReset}
      style={{
        background: "#e53935",
        color: "#fff",
        border: "none",
        padding: "8px 14px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: 500,
      }}
    >
      🔄 Reset All Data
    </button>
  );
};

export default ResetButton;
