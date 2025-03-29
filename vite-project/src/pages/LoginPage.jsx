import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotificationToast from "../components/NotificationToast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      setToastMessage("Login successful! Redirecting...");
      setToastType("success");
      setShowToast(true);
      setTimeout(() => navigate("/profile"), 2000);
    } else {
      setToastMessage("Invalid email or password. Try again.");
      setToastType("error");
      setShowToast(true);
    }
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <h1>Login</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
      <Footer />
      <NotificationToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        type={toastType}
      />
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    padding: "40px",
    textAlign: "center",
    maxWidth: "400px",
    margin: "0 auto",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    border: "2px solid #4A90E2",
    borderRadius: "8px",
  },
  button: {
    backgroundColor: "#4A90E2",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default LoginPage;
