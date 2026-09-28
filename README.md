# AI SQL Query Generator

An AI-powered web application that converts natural-language requests into SQL queries.

Users can describe what they want in plain English, select a database type, and generate an SQL query using an AI model through the Groq API.

## Features

* Generate SQL queries from natural-language instructions
* Support for multiple database types
* MySQL
* PostgreSQL
* SQLite
* SQL Server
* AI-powered SQL generation using Groq
* Responsive React interface
* Loading state while generating queries
* SQL output displayed in a code-style format
* Backend API built with Express.js

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* Groq SDK
* REST API
* dotenv
* CORS

### AI

* Groq API
* LLM

## How It Works

```text
User
 ↓
React Frontend
 ↓
POST /api/generate-sql
 ↓
Express Backend
 ↓
Groq API
 ↓
AI Model
 ↓
Generated SQL
 ↓
React Frontend
```

## Example

### Input

```text
Database: MySQL

Request:
Find all employees earning more than 50000
```

### Output

```sql
SELECT *
FROM employees
WHERE salary > 50000;
```

## Project Structure

```text
SQL-Generator/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── .gitignore
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Yashu2133/SQL-Generator.git
cd SQL-Generator
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 4. Configure the Groq API key

Create a `.env` file inside the `backend` folder:

```env
GROQ_API_KEY=your_groq_api_key
```

Never commit the `.env` file or expose your API key publicly.

### 5. Start the backend

From the `backend` folder:

```bash
node server.js
```

The backend runs on:

```text
http://localhost:5000
```

### 6. Start the frontend

From the `frontend` folder:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## API Endpoint

### POST `/api/generate-sql`

Request:

```json
{
  "database": "MySQL",
  "request": "Find all employees earning more than 50000"
}
```

Response:

```json
{
  "sql": "SELECT * FROM employees WHERE salary > 50000;"
}
```

## Environment Variables

The backend requires:

```env
GROQ_API_KEY=your_groq_api_key
```

The `.env` file should remain local and should not be pushed to GitHub.

## Learning Objectives

This project demonstrates:

* React frontend development
* Node.js and Express
* REST API communication
* Client-server architecture
* External AI API integration
* Prompt engineering
* Natural-language-to-SQL generation
* Environment variable management
* Error handling
* Responsive UI development

## Future Improvements

* Add copy-to-clipboard functionality
* Add SQL syntax highlighting
* Add query history
* Add SQL explanation
* Add query optimization suggestions
* Add schema input so the AI can generate queries based on actual tables and columns
* Add database connection and safe query execution
* Add authentication
* Deploy the application

## Author

Yashu

GitHub:
https://github.com/Yashu2133
