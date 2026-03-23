import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  let role = "Portal";

  if (location.pathname.includes("admin")) role = "Admin Portal";
  else if (location.pathname.includes("doctor")) role = "Doctor Portal";
  else if (location.pathname.includes("patient")) role = "Patient Portal";

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
        <small>{role}</small>
      </div>

      <div>
        <span style={{ marginRight: "20px", color: "green" }}>● Online</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
