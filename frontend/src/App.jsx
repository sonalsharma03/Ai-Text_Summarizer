import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [length, setLength] = useState("Medium");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const handleSummarize = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setSummary("");

    try {
      const response = await fetch("http://localhost:8080/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          length: length,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.summary || "Something went wrong");
      }

      setSummary(data.summary);
    } catch (error) {
      console.error("Error:", error);
      setSummary(error.message || "Unable to connect to the backend.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(summary);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h2>✦ SmartSummarizer</h2>
        <span>AI Powered Text Summarizer</span>
      </nav>

      <main className="container">
        <section className="hero">
          <span className="tag">✦ AI TEXT SUMMARIZER</span>
          <h1>
            Turn lengthy text into
            <span> clear summaries.</span>
          </h1>
          <p>
            Save time and understand more. Paste your content and let AI do the
            work.
          </p>
        </section>

        <section className="workspace">
          <div className="input-section">
            <div className="section-heading">
              <h3>Your Text</h3>
              <span>{wordCount} words</span>
            </div>

            <textarea
              placeholder="Paste your article, notes, or any lengthy text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="input-footer">
              <span>Paste your content above</span>
              <button onClick={() => setText("")}>Clear text</button>
            </div>

            <div className="length-section">
              <h4>Summary Length</h4>
              <div className="length-options">
                {["Short", "Medium", "Long"].map((option) => (
                  <button
                    key={option}
                    className={length === option ? "active" : ""}
                    onClick={() => setLength(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="generate-btn"
              onClick={handleSummarize}
              disabled={!text.trim() || loading}
            >
              {loading ? "Processing..." : "✦ Generate Summary"}
            </button>
          </div>

          <div className="output-section">
            <div className="section-heading">
              <h3>AI Summary</h3>
              {summary && (
                <button className="copy-btn" onClick={handleCopy}>
                  Copy
                </button>
              )}
            </div>

            <div className="summary-content">
              {loading ? (
                <p>Generating your summary...</p>
              ) : summary ? (
                <p>{summary}</p>
              ) : (
                <div className="empty-state">
                  <div className="empty-icon">✦</div>
                  <h3>Your summary will appear here</h3>
                  <p>
                    Enter your text and click Generate Summary to get started.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <footer>SmartSummarizer © 2026 | Powered by AI</footer>
      </main>
    </div>
  );
}

export default App;
