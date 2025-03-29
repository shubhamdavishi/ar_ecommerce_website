import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div style={styles.loaderContainer}>
      <Spinner animation="border" role="status" style={styles.spinner}>
        <span className="visually-hidden">{text}</span>
      </Spinner>
      <p style={styles.text}>{text}</p>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    color: "#4A90E2",
  },
  spinner: {
    width: "3rem",
    height: "3rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.2rem",
    fontWeight: "500",
  },
};

export default Loader;
