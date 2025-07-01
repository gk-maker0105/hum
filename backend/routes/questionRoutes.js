const express = require("express");
const router = express.Router();
const { getQuestions, getQuestionById } = require("../controllers/questionController");
const authenticateToken = require("../middleware/authMiddleware");

router.get("/", authenticateToken, getQuestions);
router.get("/:id", authenticateToken, getQuestionById);

module.exports = router;
