import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
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

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password &&
        user.role === formData.role
    );

    if (!foundUser) {
      alert("Invalid Credentials!");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

    navigate(`/${formData.role}`);
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleLogin} style={cardStyle}>
        <h2 style={{ color: "white" }}>Login</h2>

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
          Login
        </button>

        <p style={{ marginTop: "20px", color: "#ccc" }}>
          New User?
        </p>

        <button
          type="button"
          onClick={() => navigate("/register")}
          style={registerButtonStyle}
        >
          Register Now
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

const registerButtonStyle = {
  width: "100%",
  padding: "8px",
  backgroundColor: "#333",
  border: "1px solid tomato",
  color: "white",
  borderRadius: "5px"
};

export default Login;
