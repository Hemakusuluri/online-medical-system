import { useEffect, useState } from "react";
import "./PharmacistDashboard.css";

function PharmacistDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("prescriptions")) || [];
    setData(stored);
  }, []);

  return (
    <div className="pharma-container">

      <h2>Pharmacy Portal</h2>
      <p className="subtitle">Manage and verify e-prescriptions</p>

      {/* Cards */}
      <div className="cards">
        <div className="card-box">
          <h3 style={{ color: "blue" }}>{data.length}</h3>
          <p>Pending Verification</p>
        </div>

        <div className="card-box">
          <h3 style={{ color: "orange" }}>0</h3>
          <p>Processing</p>
        </div>

        <div className="card-box">
          <h3 style={{ color: "green" }}>0</h3>
          <p>Ready for Pickup</p>
        </div>
      </div>

      {/* Queue */}
      <div className="queue">
        <h3>E-Prescription Queue</h3>

        {data.length === 0 ? (
          <p>No prescriptions</p>
        ) : (
          data.map((item, index) => (
            <div className="queue-item" key={index}>
              <div className="left">
                <div className="icon">📄</div>
                <div>
                  <p><strong>{item.patient}</strong></p>
                  <span>{item.medicine}</span>
                  <small>{item.dosage}</small>
                </div>
              </div>

              <button className="ready-btn">
                ✓ Ready for Pickup
              </button>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default PharmacistDashboard;
