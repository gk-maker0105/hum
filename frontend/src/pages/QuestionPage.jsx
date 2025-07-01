import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

function QuestionPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState("");
  const [code, setCode] = useState("// Write your code here...");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:3000/questions/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setQuestion(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQuestion();
  }, [id]);

  const handleSubmit = () => {
    // Simulate output
    const mockResult = `✔️ Test case passed\n📦 Output: 42`;
    setOutput(mockResult);
  };

  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
  if (!question) return <p style={{ padding: "20px" }}>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{question.title}</h2>
      <p><strong>Difficulty:</strong> {question.difficulty}</p>
      <p><strong>Acceptance:</strong> {question.acceptance}</p>
      <p><strong>Description:</strong> Problem description will go here later.</p>

      <h3 style={{ marginTop: "30px" }}>Code Editor</h3>
      <div style={{ border: "1px solid #ccc", marginBottom: "10px" }}>
        <Editor
          height="300px"
          language="javascript"
          value={code}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>

      <h4 style={{ marginTop: "20px" }}>Output</h4>
      <div style={{
        background: "#f4f4f4",
        padding: "10px",
        border: "1px solid #ccc",
        whiteSpace: "pre-wrap"
      }}>
        {output || "No output yet"}
      </div>
    </div>
  );
}

export default QuestionPage;
