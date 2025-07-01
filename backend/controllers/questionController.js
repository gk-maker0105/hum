const { questions } = require("../data/store");

exports.getQuestions = (req, res) => {
  if (!questions || questions.length === 0) {
    console.log("Returning empty questions");
    return res.json({ columns: [], data: [] });
  }

  const columns = Object.keys(questions[0]);
  console.log("Returning questions:", { columns, data: questions }); // 🔥 log here
  res.json(questions);
};
