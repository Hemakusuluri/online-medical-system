import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";

import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import PharmacistDashboard from "./pages/PharmacistDashboard";

import BookAppointment from "./pages/BookAppointment";
import AddPrescription from "./pages/AddPrescription";
import AdminManageUsers from "./pages/AdminManageUsers";

// 🔥 New component to control layout
function Layout() {
  const location = useLocation();

  // ❌ Hide Navbar & Footer on Home page
  const hideLayout = location.pathname === "/";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboards */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/pharmacist" element={<PharmacistDashboard />} />

        {/* Functional Pages */}
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/add-prescription" element={<AddPrescription />} />
        <Route path="/manage-users" element={<AdminManageUsers />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
