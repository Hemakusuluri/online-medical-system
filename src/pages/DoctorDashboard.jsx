import "./DoctorDashboard.css";

function DoctorDashboard() {
  return (
    <div className="doctor-container">

      <h2>Doctor Portal</h2>
      <p className="subtitle">Manage consultations and prescriptions</p>

      {/* Top Cards */}
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

      {/* Appointments */}
      <div className="appointments">
        <h3>Today's Appointments</h3>

        <div className="appointment-item">
          <div>
            <p><strong>John Smith</strong></p>
            <span>11:00 AM • cold</span>
          </div>

          <div>
            <button className="status-btn">Scheduled</button>
            <button className="start-btn">Start Consult</button>
          </div>
        </div>
      </div>

      {/* Prescription Form */}
      <div className="prescription">
        <h3>Issue E-Prescription</h3>

        <div className="form-grid">
          <input type="text" placeholder="Enter patient name" />
          <input type="text" placeholder="Medication name" />
          <input type="text" placeholder="e.g., 500mg twice daily" />
          <input type="text" placeholder="Optional notes" />
        </div>

        <button className="submit-btn">Submit Prescription</button>
      </div>

    </div>
  );
}

export default DoctorDashboard;
