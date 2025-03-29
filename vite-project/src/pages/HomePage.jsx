import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import SearchInput from "../components/SearchInput";
import { useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "AR Sofa", price: 299.99, image: "/images/ar-sofa.png" },
    { id: 2, name: "AR Table", price: 149.99, image: "/images/ar-table.png" },
    { id: 3, name: "AR Lamp", price: 49.99, image: "/images/ar-lamp.png" },
  ]);

  const handleSearchResults = (results) => {
    setProducts(results);
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <header style={styles.header}>
        <h1>Welcome to AR E-Commerce</h1>
        <p>Experience your favorite products in Augmented Reality.</p>
        <SearchInput onResults={handleSearchResults} />
      </header>

      <main>
        <h2 style={styles.productTitle}>Featured Products</h2>
        <ProductList products={products} />
      </main>

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
  header: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#4A90E2",
    color: "#fff",
  },
  productTitle: {
    textAlign: "center",
    marginTop: "20px",
    color: "#333",
  },
};

export default HomePage;
