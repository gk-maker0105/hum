const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/questions", questionRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`);
});
