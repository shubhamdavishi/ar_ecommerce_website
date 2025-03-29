import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const NotificationToast = ({ show, onClose, message, type = "info" }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "#4CAF50";
      case "error":
        return "#F44336";
      case "warning":
        return "#FFC107";
      default:
        return "#2196F3";
    }
  };

  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        show={show}
        onClose={onClose}
        delay={3000}
        autohide
        style={{ backgroundColor: getBackgroundColor(), color: "#fff" }}
      >
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default NotificationToast;
