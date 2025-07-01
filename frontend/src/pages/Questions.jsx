import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:3000/questions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to fetch");
        setQuestions(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchQuestions();
  }, []);

  const totalPages = Math.ceil(questions.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = questions.slice(start, start + ITEMS_PER_PAGE);

  const cellStyle = {
    border: "1px solid black",
    padding: "8px",
    textAlign: "left",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Questions</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={cellStyle}>Title</th>
                <th style={cellStyle}>Difficulty</th>
                <th style={cellStyle}>Acceptance</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((q) => (
                <tr key={q.id}>
                  <td style={cellStyle}>
                    <Link to={`/questions/${q.id}`}>{q.title}</Link>
                  </td>
                  <td style={cellStyle}>{q.difficulty}</td>
                  <td style={cellStyle}>{q.acceptance}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "20px" }}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              style={{ marginRight: "10px" }}
            >
              Prev
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              style={{ marginLeft: "10px" }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Questions;
