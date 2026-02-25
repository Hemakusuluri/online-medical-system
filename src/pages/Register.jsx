import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(
      (user) => user.username === formData.username
    );

    if (userExists) {
      alert("Username already exists!");
      return;
    }

    const updatedUsers = [...users, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registered Successfully!");
    navigate("/");
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleRegister} style={cardStyle}>
        <h2 style={{ color: "white" }}>Register</h2>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="pharmacist">Pharmacist</option>
        </select>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
}

const containerStyle = {
  backgroundColor: "black",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const cardStyle = {
  backgroundColor: "#111",
  padding: "40px",
  borderRadius: "10px",
  width: "350px",
  textAlign: "center",
  boxShadow: "0 0 15px rgba(255,99,71,0.4)"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid tomato",
  backgroundColor: "#222",
  color: "white"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "tomato",
  border: "none",
  color: "white",
  borderRadius: "5px"
};

export default Register;
