import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotificationToast from "../components/NotificationToast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission logic
    console.log("Contact Form Submitted:", formData);
    setShowToast(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Reach out to us below!</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
      <NotificationToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message="Message sent successfully! We'll get back to you soon."
        type="success"
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
    maxWidth: "600px",
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
  textarea: {
    padding: "10px",
    border: "2px solid #4A90E2",
    borderRadius: "8px",
    height: "100px",
    resize: "none",
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

export default ContactPage;
