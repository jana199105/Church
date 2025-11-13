import React, { useState } from "react";
import "../App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user)); // ✅ Save login
      window.location.href = "/events"; // Redirect to events page
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Server not reachable");
  }
};

  return (
    <div className="login-page fadein">
      <div className="login-box">
        <h2>Member Login</h2>
        <form onSubmit={handleSubmit}>
          <label>UserName</label>
          <input
            type="text"
            placeholder="Enter username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
        {message && <p className="login-message">{message}</p>}
      </div>
    </div>
  );
}
