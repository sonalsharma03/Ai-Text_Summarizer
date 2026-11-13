# AI Text Summarizer

An AI-powered web application that summarizes long text into concise and meaningful summaries using Google's Gemini API.

## Features

- Summarize text using AI.
- Choose between Short, Medium, and Long summaries.
- View the word count of the input text.
- Copy the generated summary.
- Clear the input and output.
- Simple and responsive user interface.

## Tech Stack

**Frontend**
- React.js
- Vite
- JavaScript
- CSS

**Backend**
- Java 17
- Spring Boot
- Maven
- Google Gemini API

## Project Structure

```text
AI-Text-Summarizer/
├── backend/
└── frontend/
```

## Getting Started

### Prerequisites

- Java 17 or later
- Node.js and npm
- Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/sonalsharma03/Ai-Text_Summarizer.git
cd Ai-Text_Summarizer
```

### 2. Configure the API Key

Set your Gemini API key as an environment variable named `GEMINI_API_KEY`.

Do not commit your actual API key to GitHub.

### 3. Run the Backend

Open a terminal in the backend folder:

```bash
cd backend
```

Run the Spring Boot application:

```bash
.\mvnw.cmd spring-boot:run
```

The backend runs at:

`http://localhost:8080`

### 4. Run the Frontend

Open another terminal in the frontend folder:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in your terminal, usually:

`http://localhost:5173`

## API Endpoint

**POST** `/api/summarize`

Request body:

```json
{
  "text": "Enter your text here",
  "length": "Short"
}
```

Supported summary lengths: `Short`, `Medium`, `Long`.

## Future Improvements

- Download summaries as PDF.
- Add user authentication.
- Save summary history.

## Author

Sonal Sharma

