import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (form.username === "admin" && form.password === "1234") {
      localStorage.setItem("user", form.username);
      setUser(form.username);
      navigate("/admin");
    } else {
      alert("Invalid username or password❌");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "5rem auto", textAlign: "center" }}>
      <h2>🔐 Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Login
        </button>
      </form>
    </div>
  );
}
