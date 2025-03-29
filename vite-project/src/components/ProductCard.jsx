import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3 style={styles.title}>{product.name}</h3>
      <p style={styles.price}>${product.price.toFixed(2)}</p>
      <button style={styles.button}>View in AR</button>
    </div>
  );
};

const styles = {
  card: {
    border: "2px solid #ddd",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "250px",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#4A90E2",
  },
  price: {
    color: "#4CAF50",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#4A90E2",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ProductCard;
