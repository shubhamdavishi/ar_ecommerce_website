import React, { useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const SearchInput = ({ onResults }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return alert("Please enter a search term.");

    setLoading(true);
    try {
      const response = await axios.get(
        "/api/smart-search?query=${encodeURIComponent(query)}"
      );
      onResults(response.data.results || []);
    } catch (error) {
      console.error("Smart search failed:", error);
      alert("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
      {loading && <Loader text="Searching..." />}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  input: {
    width: "300px",
    padding: "10px",
    border: "2px solid #4A90E2",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SearchInput;
