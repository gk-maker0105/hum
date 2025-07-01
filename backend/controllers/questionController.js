const { questions } = require("../data/store");

exports.getQuestions = (req, res) => {
  if (!questions || questions.length === 0) {
    return res.json([]);
  }

  res.json(questions); // ✅ return flat array only
};

exports.getQuestionById = (req, res) => {
  const id = parseInt(req.params.id);
  const question = questions.find((q) => q.id === id);

  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }

  res.json(question);
};
