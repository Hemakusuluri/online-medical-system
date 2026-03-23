import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="logo-box">❤️</div>

      <h1 className="title">MediConnect</h1>
      <p className="subtitle">Your Health, Connected</p>

      <div className="card">
        <h3>Select Your Role</h3>

        <div className="grid">
          <div onClick={() => navigate("/admin")} className="box">Admin</div>
          <div onClick={() => navigate("/doctor")} className="box">Doctor</div>
          <div onClick={() => navigate("/patient")} className="box">Patient</div>
          <div onClick={() => navigate("/pharmacist")} className="box">Pharmacist</div>
        </div>
      </div>

      <p className="footer">Demo System — Click any role to explore</p>
    </div>
  );
}

export default Home;
