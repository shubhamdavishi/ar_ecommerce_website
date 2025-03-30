import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotificationToast from "../components/NotificationToast";

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, product: "Smart Glasses", status: "Shipped" },
    { id: 2, product: "AR Headset", status: "Processing" },
    { id: 3, product: "Wireless Charger", status: "Delivered" },
  ]);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const cancelOrder = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "Cancelled" } : order
    );
    setOrders(updatedOrders);
    setToastMessage("Order #${id} has been cancelled.");
    setShowToast(true);
  };

  return (
    <div style={styles.container}>
     
      <div style={styles.content}>
        <h1>My Orders</h1>
        <div style={styles.ordersContainer}>
          {orders.map((order) => (
            <div key={order.id} style={styles.orderItem}>
              <span>{order.product}</span>
              <span>Status: {order.status}</span>
              {order.status === "Processing" && (
                <button
                  style={styles.cancelButton}
                  onClick={() => cancelOrder(order.id)}
                >
                  Cancel Order
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <NotificationToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        type="warning"
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
  ordersContainer: {
    marginTop: "20px",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  orderItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  },
  cancelButton: {
    backgroundColor: "#E53E3E",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default OrdersPage;
