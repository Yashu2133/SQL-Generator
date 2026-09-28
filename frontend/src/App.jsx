import { useState } from "react";

function App() {
  const [database, setDatabase] = useState("MySQL");
  const [request, setRequest] = useState("");
  const [sql, setSql] = useState("");
  const [loading, setLoading] = useState(false);

  const generateSQL = async () => {
    if (!request.trim()) {
      alert("Please describe what you want.");
      return;
    }

    setLoading(true);
    setSql("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/generate-sql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            database,
            request,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate SQL");
      }

      setSql(data.sql);
    } catch (error) {
      console.error("SQL generation error:", error);
      setSql("Unable to generate SQL. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>AI SQL Query Generator</h1>
        <p>
          Describe what you want in plain English and generate SQL.
        </p>
      </header>

      <main>
        <div className="card">
          <label>Database</label>

          <select
            value={database}
            onChange={(e) => setDatabase(e.target.value)}
          >
            <option>MySQL</option>
            <option>PostgreSQL</option>
            <option>SQLite</option>
            <option>SQL Server</option>
          </select>

          <label>Describe your request</label>

          <textarea
            placeholder="Example: Find all employees earning more than 50000"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />

          <button onClick={generateSQL} disabled={loading}>
            {loading ? "Generating..." : "Generate SQL"}
          </button>
        </div>

        <div className="card">
          <h2>Generated SQL</h2>

          <pre className="sql-output">
            {sql || "Your SQL query will appear here..."}
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;