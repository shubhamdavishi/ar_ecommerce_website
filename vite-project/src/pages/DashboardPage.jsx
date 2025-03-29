import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import NotificationToast from "../components/NotificationToast";

const DashboardPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <h1>Dashboard</h1>
        <p>
          Welcome to your dashboard! Manage your products, orders, and profile
          here.
        </p>
        <div style={styles.section}>
          <h2>My Products</h2>
          <ProductList />
        </div>
        <div style={styles.section}>
          <h2>Notifications</h2>
          <NotificationToast
            show={true}
            message="You have 3 new orders pending!"
            type="info"
          />
        </div>
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
  section: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default DashboardPage;
