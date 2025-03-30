import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotificationToast from "../components/NotificationToast";

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, product: "Smart Glasses", price: 149.99, quantity: 1 },
    { id: 2, product: "AR Headset", price: 299.99, quantity: 2 },
  ]);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setToastMessage("Item removed from cart.");
    setShowToast(true);
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>Shopping Cart</h1>
        <div style={styles.cartContainer}>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <span>
                  {item.product} - ${item.price.toFixed(2)}
                </span>
                <div style={styles.controls}>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button
                    style={styles.removeButton}
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      </div>
      <NotificationToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        type="error"
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
  cartContainer: {
    marginTop: "20px",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  removeButton: {
    backgroundColor: "#E53E3E",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default CartPage;
