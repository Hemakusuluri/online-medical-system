import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  let role = "Portal";

  if (location.pathname.includes("admin")) role = "Admin Portal";
  else if (location.pathname.includes("doctor")) role = "Doctor Portal";
  else if (location.pathname.includes("patient")) role = "Patient Portal";
  else if (location.pathname.includes("pharmacist")) role = "Pharmacist Portal";

  const handleLogout = () => {
    // 🔥 clear any stored data (future use)
    localStorage.clear();

    // 🔥 redirect to home page
    navigate("/");
  };

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
        
        <button
          onClick={handleLogout}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            background: "#eee",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

    </div>
  );
}

export default Navbar;
