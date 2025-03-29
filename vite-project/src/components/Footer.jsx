import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p>
          &copy; {new Date().getFullYear()} AR Commerce. All Rights Reserved.
        </p>
        <ul style={styles.links}>
          <li>
            <a href="/privacy" style={styles.link}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" style={styles.link}>
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/contact" style={styles.link}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#2C3E50",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "auto",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  links: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
    padding: 0,
  },
  link: {
    color: "#FFC107",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  },
};

export default Footer;
