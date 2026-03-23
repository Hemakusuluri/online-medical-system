function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#fff",
      borderBottom: "1px solid #ddd"
    }}>
      <div>
        <strong>MediConnect</strong><br />
        <small>Admin Portal</small>
      </div>

      <div>
        <span style={{ marginRight: "20px", color: "green" }}>● Online</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
