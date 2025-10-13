// src/components/Header/index.tsx
import React from "react";
import logo from "../../assets/lifepulse-logo.png";
const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
        background: "#4caf50",
        color: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo + App Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#4caf50",
          }}
        >
          L
        </div>
        <h2 style={{ margin: 0, fontSize: "1.4rem" }}>LifePulse</h2>
      </div>

      {/* Placeholder for future buttons */}
      <nav style={{ display: "flex", gap: "12px" }}>
        {/* You can drop HelpButton or ResetButton here later */}
      </nav>
    </header>
  );
};

export default Header;
