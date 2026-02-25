import { useState } from "react";

function AdminManageUsers() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("User Registered Successfully!");

    setNewUser({ username: "", password: "", role: "" });
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: "white" }}>Register User</h2>

        <input
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="role"
          value={newUser.role}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="pharmacist">Pharmacist</option>
        </select>

        <button onClick={handleAddUser} style={buttonStyle}>
          Register
        </button>
      </div>
    </div>
  );
}

const containerStyle = {
  backgroundColor: "black",
  minHeight: "100vh",
  paddingTop: "80px",
  textAlign: "center"
};

const cardStyle = {
  backgroundColor: "#111",
  padding: "40px",
  borderRadius: "10px",
  width: "400px",
  margin: "auto",
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
  backgroundColor: "tomato",
  padding: "10px",
  border: "none",
  color: "white",
  width: "100%",
  borderRadius: "5px"
};

export default AdminManageUsers;
