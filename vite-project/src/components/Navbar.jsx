import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>AR Commerce</div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" style={styles.link}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/ar-viewer" style={styles.link}>
            AR Viewer
          </Link>
        </li>
        <li>
          <Link to="/search" style={styles.link}>
            Smart Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#4A90E2",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease-in-out",
  },
  linkHover: {
    color: "#FFC107",
  },
};

export default Navbar;
