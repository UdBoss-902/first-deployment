// src/components/CardVital/index.tsx
import React, { ReactNode } from "react";

type CardVitalProps = {
  title: string;
  children: ReactNode;
};

const CardVital: React.FC<CardVitalProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0, marginBottom: "12px" }}>{title}</h3>
      {children}
    </div>
  );
};

export default CardVital;
