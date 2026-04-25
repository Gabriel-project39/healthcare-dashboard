import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Vitals from "./components/Vitals";
import ChartComponent from "./components/ChartComponent";
import "./App.css";

function App() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("API_URL_HERE");
    const data = await res.json();

    const jessica = data.find(p => p.name === "Jessica Taylor");
    setPatient(jessica);
  };

  if (!patient) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <Sidebar />

      <main className="main">
        <h2>Diagnosis History</h2>
        <ChartComponent history={patient.diagnosis_history} />
        <Vitals patient={patient} />
      </main>

      <Profile patient={patient} />
    </div>
  );
}

export default App;
