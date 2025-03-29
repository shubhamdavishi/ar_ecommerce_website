import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div style={styles.grid}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p style={styles.noProducts}>No products found.</p>
      )}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  noProducts: {
    textAlign: "center",
    color: "#999",
    width: "100%",
  },
};

export default ProductList;
