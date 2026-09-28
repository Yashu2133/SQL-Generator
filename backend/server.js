const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Groq = require("groq-sdk");

const app = express();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AI SQL Generator API is running",
  });
});

app.post("/api/generate-sql", async (req, res) => {
  try {
    const { database, request } = req.body;

    if (!database || !request) {
      return res.status(400).json({
        error: "Database and request are required.",
      });
    }

    const prompt = `
You are an SQL query generator.

Convert the user's natural language request into a valid SQL query.

Database: ${database}

User request:
${request}

Rules:
- Return only the SQL query.
- Do not add explanations.
- Do not use markdown code fences.
- Do not invent information that is not required.
- Generate SQL appropriate for the selected database.
`;

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
    });

    const sql = completion.choices[0].message.content.trim();

    res.json({
      sql,
    });
  } catch (error) {
    console.error("SQL generation error:", error);

    res.status(500).json({
      error: "Failed to generate SQL.",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});