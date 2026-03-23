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
      <div style={cardStyle}>
        <h1 style={titleStyle}>MediConnect</h1>
        <p style={subtitleStyle}>Your Health, Connected</p>

        <h3 style={{ marginBottom: "15px" }}>Select Your Role</h3>

        <div style={roleGrid}>
          {["admin", "doctor", "patient", "pharmacist"].map((role) => (
            <div
              key={role}
              style={{
                ...roleBox,
                border:
                  formData.role === role
                    ? "2px solid #4CAF50"
                    : "1px solid #ddd"
              }}
              onClick={() =>
                setFormData({ ...formData, role: role })
              }
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </div>
          ))}
        </div>

        <form onSubmit={handleLogin}>
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

        <p style={{ marginTop: "15px", color: "#777" }}>
          New User?
        </p>

        <button
          onClick={() => navigate("/register")}
          style={registerButtonStyle}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Login;
