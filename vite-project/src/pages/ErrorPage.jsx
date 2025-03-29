import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <button onClick={() => navigate("/")} style={styles.button}>
          Go to Home
        </button>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  content: {
    padding: "50px",
    color: "#d32f2f",
  },
  button: {
    backgroundColor: "#4A90E2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default ErrorPage;
