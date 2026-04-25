import React from "react";

function Profile({ patient }) {
  return (
    <aside className="profile">
      <h2>{patient.name}</h2>
      <p>Gender: {patient.gender}</p>
      <p>DOB: {patient.date_of_birth}</p>
      <p>Phone: {patient.phone_number}</p>
    </aside>
  );
}

export default Profile;