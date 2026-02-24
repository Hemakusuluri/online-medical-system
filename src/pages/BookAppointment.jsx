import { useState } from "react";

function BookAppointment() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked Successfully!");

    setFormData({
      patientName: "",
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
      <h1 style={{ marginBottom: "40px" }}>
        Book Appointment
      </h1>

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
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={formData.doctorName}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "tomato",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            marginTop: "15px"
          }}
        >
          Book Now
        </button>
      </form>
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

export default BookAppointment;