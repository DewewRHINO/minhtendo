import React from "react";
import "./SectionHeader.css";

// PARAMETERS
// String heading
// String fontSize (Optional)
export const SectionHeader = ({ heading, fontSize }) => {
  return (
    <div className="SectionHeader" style={{ fontSize: fontSize || "2.5rem" }}>
      {heading || "Section Heading"}
    </div>
  );
};
