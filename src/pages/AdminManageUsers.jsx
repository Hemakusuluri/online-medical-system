import { useState } from "react";

function AdminManageUsers() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [newUser, setNewUser] = useState({
    name: "",
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

    setNewUser({ name: "", role: "" });
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "white"
      }}
    >
      <div style={{ maxWidth: "700px", margin: "auto" }}>

        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Admin - Manage Users
        </h1>

        <div
          style={{
            backgroundColor: "#111",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(255,99,71,0.4)"
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="User Name"
            value={newUser.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid tomato",
              backgroundColor: "#222",
              color: "white"
            }}
          />

          <select
            name="role"
            value={newUser.role}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid tomato",
              backgroundColor: "#222",
              color: "white"
            }}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
            <option value="pharmacist">Pharmacist</option>
          </select>

          <button
            onClick={handleAddUser}
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
            Add User
          </button>
        </div>

        <h3 style={{ marginTop: "40px" }}>Existing Users</h3>

        {users.length === 0 ? (
          <p>No users added.</p>
        ) : (
          users.map((user, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#111",
                padding: "15px",
                marginTop: "15px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 0 10px rgba(255,99,71,0.3)"
              }}
            >
              <span>
                {user.name} - {user.role}
              </span>

              <button
                onClick={() => handleDelete(index)}
                style={{
                  backgroundColor: "tomato",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "5px"
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default AdminManageUsers;