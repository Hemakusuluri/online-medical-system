import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role === "admin") navigate("/admin");
    if (role === "doctor") navigate("/doctor");
    if (role === "patient") navigate("/patient");
    if (role === "pharmacist") navigate("/pharmacist");
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          backgroundColor: "#111",
          padding: "40px",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0 0 15px rgba(255,99,71,0.4)"
        }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "25px"
          }}
        >
          Login
        </h2>

        <select
          onChange={(e) => setRole(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "20px",
            backgroundColor: "#222",
            color: "white",
            border: "1px solid tomato"
          }}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="pharmacist">Pharmacist</option>
        </select>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "tomato",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;