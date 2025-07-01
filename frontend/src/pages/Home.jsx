import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to LeetClone 🧠</h1>
      <p>Practice coding problems, track progress, and prepare for interviews!</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/login" style={{ marginRight: "15px" }}>Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Home;
