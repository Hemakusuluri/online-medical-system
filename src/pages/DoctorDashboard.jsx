import { useState } from "react";
import "./DoctorDashboard.css";

function DoctorDashboard() {
  const [form, setForm] = useState({
    patient: "",
    medicine: "",
    dosage: "",
    notes: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 Submit Prescription
  const handleSubmit = () => {
    const existing = JSON.parse(localStorage.getItem("prescriptions")) || [];

    existing.push(form);

    localStorage.setItem("prescriptions", JSON.stringify(existing));

    alert("Prescription sent to Pharmacist ✅");

    setForm({
      patient: "",
      medicine: "",
      dosage: "",
      notes: ""
    });
  };

  const startConsult = () => {
    alert("Consultation started with patient 👨‍⚕️");
  };

  return (
    <div className="doctor-container">

      <h2>Doctor Portal</h2>
      <p className="subtitle">Manage consultations and prescriptions</p>

      {/* Cards */}
      <div className="cards">
        <div className="card-box">
          <h3 style={{ color: "teal" }}>1</h3>
          <p>Pending Consultations</p>
        </div>

        <div className="card-box">
          <h3 style={{ color: "purple" }}>0</h3>
          <p>Completed Today</p>
        </div>

        <div className="card-box">
          <h3 style={{ color: "orange" }}>2</h3>
          <p>E-Prescriptions</p>
        </div>
      </div>

      {/* Appointment */}
      <div className="appointments">
        <h3>Today's Appointments</h3>

        <div className="appointment-item">
          <div>
            <p><strong>John Smith</strong></p>
            <span>11:00 AM • cold</span>
          </div>

          <div>
            <button className="status-btn">Scheduled</button>
            <button className="start-btn" onClick={startConsult}>
              Start Consult
            </button>
          </div>
        </div>
      </div>

      {/* Prescription Form */}
      <div className="prescription">
        <h3>Issue E-Prescription</h3>

        <div className="form-grid">
          <input
            type="text"
            name="patient"
            placeholder="Enter patient name"
            value={form.patient}
            onChange={handleChange}
          />

          <input
            type="text"
            name="medicine"
            placeholder="Medication name"
            value={form.medicine}
            onChange={handleChange}
          />

          <input
            type="text"
            name="dosage"
            placeholder="e.g., 500mg twice daily"
            value={form.dosage}
            onChange={handleChange}
          />

          <input
            type="text"
            name="notes"
            placeholder="Optional notes"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit Prescription
        </button>
      </div>

    </div>
  );
}

export default DoctorDashboard;
