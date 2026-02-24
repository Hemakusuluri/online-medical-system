import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        paddingTop: "100px"
      }}
    >
      <h1 style={{ color: "tomato", fontSize: "3rem" }}>
        Online Medical Consultation System
      </h1>

      <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
        Book appointments and consult doctors virtually.
      </p>

      <Link to="/login">
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "6px",
            marginTop: "30px",
            fontSize: "18px"
          }}
        >
          Go to Login
        </button>
      </Link>
    </div>
  );
}

export default Home;