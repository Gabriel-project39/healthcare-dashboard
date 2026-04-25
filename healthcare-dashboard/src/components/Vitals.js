import React from "react";

function Vitals({ patient }) {
  return (
    <div className="cards">
      <div>Respiratory Rate: {patient.respiratory_rate}</div>
      <div>Temperature: {patient.temperature}</div>
      <div>Heart Rate: {patient.heart_rate}</div>
    </div>
  );
}

export default Vitals;