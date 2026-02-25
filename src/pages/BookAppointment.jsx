import { useState, useEffect } from "react";

function BookAppointment() {
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const [formData, setFormData] = useState({
    doctorName: "",
    date: "",
    time: ""
  });

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      patientName: loggedUser.username,
      doctorName: formData.doctorName,
      date: formData.date,
      time: formData.time
    };

    const existing =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const updated = [...existing, newAppointment];

    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);

    alert("Appointment Booked Successfully!");

    setFormData({
      doctorName: "",
      date: "",
      time: ""
    });
  };

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
      <h1 style={{ marginBottom: "40px" }}>Book Appointment</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#111",
          padding: "40px",
          borderRadius: "10px",
          width: "450px",
          margin: "auto",
          boxShadow: "0 0 15px rgba(255,99,71,0.4)"
        }}
      >
        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={formData.doctorName}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          Book Now
        </button>
      </form>

      {/* Show Appointments */}
      <div style={{ marginTop: "50px" }}>
        <h2 style={{ color: "white" }}>Your Appointments</h2>

        {appointments
          .filter((a) => a.patientName === loggedUser?.username)
          .map((appointment, index) => (
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
          ))}

        {appointments.filter(
          (a) => a.patientName === loggedUser?.username
        ).length === 0 && (
          <p style={{ color: "#ccc" }}>No Appointments Booked Yet</p>
        )}
      </div>
    </div>
  );
}

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
  padding: "12px",
  backgroundColor: "tomato",
  border: "none",
  color: "white",
  borderRadius: "6px",
  fontSize: "16px",
  marginTop: "10px"
};

export default BookAppointment;
