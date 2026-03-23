import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-container">

      <h2>Admin Dashboard</h2>
      <p className="subtitle">System overview and management</p>

      {/* Top Cards */}
      <div className="cards">
        <div className="card-box">
          <h3>24</h3>
          <p>Total Patients</p>
        </div>

        <div className="card-box">
          <h3>4</h3>
          <p>Active Doctors</p>
        </div>

        <div className="card-box">
          <h3>1</h3>
          <p>Appointments</p>
        </div>

        <div className="card-box">
          <h3>2</h3>
          <p>E-Prescriptions</p>
        </div>
      </div>

      {/* Activity Section */}
      <div className="activity">
        <h3>Recent System Activity</h3>

        <div className="activity-item">
          <p><strong>Appointment:</strong> John Smith</p>
          <span>Dr. Sarah Chen • Scheduled</span>
          <small>2/26/2026</small>
        </div>

        <div className="activity-item">
          <p><strong>Prescription:</strong> Sri</p>
          <span>Dr. Sarah Chen • Active</span>
          <small>2/26/2026</small>
        </div>

        <div className="activity-item">
          <p><strong>Prescription:</strong> Hema</p>
          <span>Dr. Sarah Chen • Active</span>
          <small>2/26/2026</small>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;
