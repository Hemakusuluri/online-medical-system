import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
        user.password === formData.password
    );

    if (!foundUser) {
      alert("Invalid Username or Password");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

    if (foundUser.role === "admin") navigate("/admin");
    if (foundUser.role === "doctor") navigate("/doctor");
    if (foundUser.role === "patient") navigate("/patient");
    if (foundUser.role === "pharmacist") navigate("/pharmacist");
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleLogin} style={cardStyle}>
        <h2 style={{ color: "white" }}>Login</h2>

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

export default Login;
