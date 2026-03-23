import "./PharmacistDashboard.css";

function PharmacistDashboard() {
  return (
    <div className="pharma-container">

      <h2>Pharmacy Portal</h2>
      <p className="subtitle">Manage and verify e-prescriptions</p>

      {/* Top Cards */}
      <div className="cards">
        <div className="card-box">
          <h3 style={{ color: "blue" }}>0</h3>
          <p>Pending Verification</p>
        </div>

        <div className="card-box">
          <h3 style={{ color: "orange" }}>0</h3>
          <p>Processing</p>
        </div>

        <div className="card-box">
          <h3 style={{ color: "green" }}>2</h3>
          <p>Ready for Pickup</p>
        </div>
      </div>

      {/* Prescription Queue */}
      <div className="queue">
        <h3>E-Prescription Queue</h3>

        <div className="queue-item">
          <div className="left">
            <div className="icon">📄</div>
            <div>
              <p><strong>hema</strong></p>
              <span>dolo - 650</span>
              <small>Dr. Sarah Chen</small>
            </div>
          </div>

          <button className="ready-btn">✓ Ready for Pickup</button>
        </div>

        <div className="queue-item">
          <div className="left">
            <div className="icon">📄</div>
            <div>
              <p><strong>Sri</strong></p>
              <span>paracetamol - 500</span>
              <small>Dr. Sarah Chen</small>
            </div>
          </div>

          <button className="ready-btn">✓ Ready for Pickup</button>
        </div>

      </div>

    </div>
  );
}

export default PharmacistDashboard;
