import { useEffect, useState } from "react";

function PharmacistDashboard() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("prescriptions")) || [];
    setPrescriptions(stored);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        paddingTop: "80px",
        textAlign: "center",
        color: "white"
      }}
    >
      <h1 style={{ marginBottom: "40px" }}>
        Pharmacist Dashboard
      </h1>

      {prescriptions.length === 0 ? (
        <p style={{ color: "#ccc" }}>
          No Prescriptions Available
        </p>
      ) : (
        prescriptions.map((p, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#111",
              padding: "20px",
              margin: "20px auto",
              borderRadius: "8px",
              width: "500px",
              boxShadow: "0 0 10px rgba(255,99,71,0.3)"
            }}
          >
            <p><strong>Patient:</strong> {p.patientName}</p>
            <p><strong>Medicine:</strong> {p.medicine}</p>
            <p><strong>Dosage:</strong> {p.dosage}</p>
            <p><strong>Notes:</strong> {p.notes}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PharmacistDashboard;