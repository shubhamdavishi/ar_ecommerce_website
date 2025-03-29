import React, { useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const ObjectDetectionUploader = () => {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image first.");

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    try {
      const response = await axios.post("/api/detect-object", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResults(response.data.detectedObjects || []);
    } catch (error) {
      console.error("Object detection failed:", error);
      alert("Failed to detect objects. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Object Detection with Groq AI</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={styles.input}
      />
      <button onClick={handleUpload} style={styles.button}>
        Detect Objects
      </button>

      {loading && <Loader text="Detecting objects..." />}

      {results.length > 0 && (
        <div style={styles.results}>
          <h3>Detected Objects:</h3>
          <ul>
            {results.map((obj, index) => (
              <li key={index}>
                {obj.name} (Confidence: {obj.confidence.toFixed(2)})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  input: {
    margin: "10px 0",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  results: {
    marginTop: "20px",
    textAlign: "left",
  },
};

export default ObjectDetectionUploader;
