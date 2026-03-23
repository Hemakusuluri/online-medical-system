import "./PatientDashboard.css";

function PatientDashboard() {
  return (
    <div className="patient-container">

      <h2>Welcome, John Smith</h2>
      <p className="subtitle">Manage your healthcare journey</p>

      {/* Top Cards */}
      <div className="cards">
        <div className="card-box">
          <h4>Book Appointment</h4>
          <p>Schedule a consultation</p>
        </div>

        <div className="card-box">
          <h4>Medical Records</h4>
          <p>0 prescriptions</p>
        </div>

        <div className="card-box">
          <h4>Lab Reports</h4>
          <p>View results</p>
        </div>

        <div className="card-box">
          <h4>Video Consult</h4>
          <p>Join session</p>
        </div>
      </div>

      {/* Appointments */}
      <div className="section">
        <h3>My Appointments</h3>

        <div className="appointment-item">
          <div>
            <p><strong>Dr. Sarah Chen</strong></p>
            <span>General Medicine • 2026-02-28 at 11:00 AM</span>
          </div>

          <button className="status-btn">Scheduled</button>
        </div>
      </div>

      {/* Prescriptions */}
      <div className="section">
        <h3>My E-Prescriptions</h3>

        <div className="empty-box">
          No prescriptions yet
        </div>
      </div>

    </div>
  );
}

export default PatientDashboard;
