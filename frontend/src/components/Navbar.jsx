import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div style={{
      padding: "12px 20px",
      background: "#222",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #444"
    }}>
      <strong
        onClick={() => navigate("/")}
        style={{ cursor: "pointer", fontSize: "18px" }}
      >
        LeetClone
      </strong>

      {email ? (
        <div>
          <span style={{ marginRight: "15px" }}>👋 {email}</span>
          <button
            onClick={handleLogout}
            style={buttonStyleRed}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => navigate("/login")}
            style={buttonStyle}
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            style={{ ...buttonStyle, marginLeft: "10px" }}
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: "6px 12px",
  backgroundColor: "#03a9f4",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

const buttonStyleRed = {
  ...buttonStyle,
  backgroundColor: "#f44336"
};

export default Navbar;
