const jwt = require("jsonwebtoken");
const SECRET = "leet_secret";

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Token required" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = authenticateToken;
