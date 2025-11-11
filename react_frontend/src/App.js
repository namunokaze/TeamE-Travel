import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./Contact";
import AdminDashboard from "./pages/Admin";
import Login from "./pages/Login"; // 🔐 Login хуудас нэмнэ

function App() {
  const [user, setUser] = useState(null);

  // ⏪ Хэрвээ өмнө нь login хийсэн бол localStorage-оос уншина
  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) setUser(loggedUser);
  }, []);

  // 🔒 Зөвхөн нэвтэрсэн хэрэглэгч орох боломжтой route
  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* 🛡 Admin page хамгаалалттай */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
