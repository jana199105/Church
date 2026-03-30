import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ add this
import "../App.css";

export default function Login() {
  const navigate = useNavigate(); // ✅ add this

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://church-bq2s.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/events"); // ✅ FIXED
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}