import React, { useState } from "react";
import axios from "axios";

const ProductSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/search?query=${query}");
      setResults(response.data.results);
    } catch (err) {
      setError("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product Search</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a product..."
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      <ul style={styles.resultsContainer}>
        {results.map((item, index) => (
          <li key={index} style={styles.resultItem}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    margin: "20px auto",
  },
  title: {
    marginBottom: "15px",
    fontSize: "1.5rem",
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    width: "100%",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  resultsContainer: {
    marginTop: "20px",
    width: "100%",
    listStyleType: "none",
    padding: 0,
  },
  resultItem: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
};

export default ProductSearch;
