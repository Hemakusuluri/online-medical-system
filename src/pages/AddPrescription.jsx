import { useState } from "react";

function AddPrescription() {
  const [prescription, setPrescription] = useState({
    patientName: "",
    medicine: "",
    dosage: "",
    notes: ""
  });

  const handleChange = (e) => {
    setPrescription({
      ...prescription,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing =
      JSON.parse(localStorage.getItem("prescriptions")) || [];

    const updated = [...existing, prescription];

    localStorage.setItem("prescriptions", JSON.stringify(updated));

    alert("Prescription Added Successfully!");

    setPrescription({
      patientName: "",
      medicine: "",
      dosage: "",
      notes: ""
    });
  };

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
        Add Prescription
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#111",
          padding: "40px",
          borderRadius: "10px",
          width: "450px",
          margin: "auto",
          boxShadow: "0 0 15px rgba(255,99,71,0.4)"
        }}
      >
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={prescription.patientName}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="medicine"
          placeholder="Medicine Name"
          value={prescription.medicine}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="dosage"
          placeholder="Dosage"
          value={prescription.dosage}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="notes"
          placeholder="Additional Notes"
          value={prescription.notes}
          onChange={handleChange}
          style={{ ...inputStyle, height: "80px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "tomato",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            marginTop: "15px"
          }}
        >
          Submit Prescription
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid tomato",
  backgroundColor: "#222",
  color: "white"
};

export default AddPrescription;