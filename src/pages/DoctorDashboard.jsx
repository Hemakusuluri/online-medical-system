import { useNavigate } from "react-router-dom";

function DoctorDashboard() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        paddingTop: "80px",
        textAlign: "center"
      }}
    >
      <h1 style={{ color: "white", marginBottom: "40px" }}>
        Doctor Dashboard
      </h1>

      <div
        style={{
          backgroundColor: "#111",
          padding: "40px",
          borderRadius: "10px",
          width: "450px",
          margin: "auto",
          boxShadow: "0 0 15px rgba(255,99,71,0.4)"
        }}
      >
        <h3 style={{ color: "white", marginBottom: "15px" }}>
          Add Prescription
        </h3>

        <p style={{ color: "#ccc", marginBottom: "25px" }}>
          Create prescriptions for patients.
        </p>

        <button
          onClick={() => navigate("/add-prescription")}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "tomato",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px"
          }}
        >
          Add Prescription
        </button>
      </div>
    </div>
  );
}

export default DoctorDashboard;