import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductARViewer from "../components/ProductARViewer";
import NotificationToast from "../components/NotificationToast";

const ARExperiencePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setToastMessage("${product.name} loaded in AR viewer.");
    setShowToast(true);
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <h1>Augmented Reality Experience</h1>
        <p>Select a product to view it in AR.</p>
        <div style={styles.productList}>
          {[
            {
              id: 1,
              name: "Smart Glasses",
              modelUrl: "/models/smart_glasses.glb",
            },
            { id: 2, name: "AR Headset", modelUrl: "/models/ar_headset.glb" },
            {
              id: 3,
              name: "Wireless Charger",
              modelUrl: "/models/wireless_charger.glb",
            },
          ].map((product) => (
            <button
              key={product.id}
              style={styles.productButton}
              onClick={() => handleProductSelect(product)}
            >
              {product.name}
            </button>
          ))}
        </div>
        {selectedProduct && <ProductARViewer product={selectedProduct} />}
      </div>
      <Footer />
      <NotificationToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        type="info"
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
    maxWidth: "800px",
    margin: "0 auto",
    color: "#333",
  },
  productList: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    margin: "20px 0",
  },
  productButton: {
    backgroundColor: "#4A90E2",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ARExperiencePage;
