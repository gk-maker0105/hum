const jwt = require("jsonwebtoken");
const { users } = require("../data/store");
const SECRET = "leet_secret";

exports.signup = (req, res) => {
  const { email, password } = req.body;
  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ email, password });
  res.json({ message: "Signup successful" });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
  res.json({ token });
};
