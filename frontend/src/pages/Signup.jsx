import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (err) {
      alert("Error connecting to backend");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
