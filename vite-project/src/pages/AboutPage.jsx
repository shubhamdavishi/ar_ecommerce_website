import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <h1>About Us</h1>
        <p>
          Our platform revolutionizes e-commerce with cutting-edge Augmented
          Reality (AR) technology. Visualize your favorite products in your
          space before making a purchase!
        </p>

        <h2>Our Mission</h2>
        <p>
          We aim to bridge the gap between digital shopping and real-world
          visualization, empowering customers to make informed decisions with
          confidence.
        </p>

        <h2>Technologies We Use</h2>
        <ul>
          <li>Groq AI for powerful object detection.</li>
          <li>Perplexity AI for advanced smart search capabilities.</li>
          <li>WebAR for immersive AR experiences.</li>
        </ul>
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
  },
  content: {
    padding: "40px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    color: "#333",
  },
};

export default AboutPage;
