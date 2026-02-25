import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientDashboard() {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const patientAppointments = appointments.filter(
    (a) => a.patientName === loggedUser?.username
  );

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        paddingTop: "80px",
        textAlign: "center",
        color: "white"
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Patient Dashboard</h1>

      <h3 style={{ color: "white", marginBottom: "40px" }}>
        Welcome, {loggedUser?.username}
      </h3>

      {/* Book Appointment Card */}
      <div
        style={{
          backgroundColor: "#111",
          padding: "40px",
          borderRadius: "10px",
          width: "450px",
          margin: "auto",
          boxShadow: "0 0 15px rgba(255,99,71,0.4)"
        }}
      >
        <h3 style={{ color: "white", marginBottom: "15px" }}>
          Book Appointment
        </h3>

        <p style={{ color: "#ccc", marginBottom: "25px" }}>
          Schedule your consultation with doctors.
        </p>

        <button
          onClick={() => navigate("/book-appointment")}
          style={buttonStyle}
        >
          Book Now
        </button>
      </div>

      {/* Show Appointments */}
      <div style={{ marginTop: "50px" }}>
        <h2 style={{ color: "white" }}>Your Appointments</h2>

        {patientAppointments.length === 0 ? (
          <p style={{ color: "#ccc" }}>
            No Appointments Booked Yet
          </p>
        ) : (
          patientAppointments.map((appointment, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#111",
                padding: "15px",
                margin: "15px auto",
                width: "450px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(255,99,71,0.3)"
              }}
            >
              <p><strong>Doctor:</strong> {appointment.doctorName}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "tomato",
  border: "none",
  color: "white",
  borderRadius: "6px",
  fontSize: "16px"
};

export default PatientDashboard;
