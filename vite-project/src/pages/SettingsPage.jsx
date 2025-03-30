import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotificationToast from "../components/NotificationToast";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoUpdate: true,
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    setToastMessage(
      "${key.charAt(0).toUpperCase() + key.slice(1)} updated successfully!"
    );
    setShowToast(true);
  };

  return (
    <div style={styles.container}>
    
      <div style={styles.content}>
        <h1>Settings</h1>
        <div style={styles.settingsContainer}>
          <div style={styles.settingItem}>
            <span>Notifications</span>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleToggle("notifications")}
            />
          </div>
          <div style={styles.settingItem}>
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => handleToggle("darkMode")}
            />
          </div>
          <div style={styles.settingItem}>
            <span>Auto Update</span>
            <input
              type="checkbox"
              checked={settings.autoUpdate}
              onChange={() => handleToggle("autoUpdate")}
            />
          </div>
        </div>
      </div>
      <NotificationToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        type="success"
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
  settingsContainer: {
    marginTop: "20px",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  settingItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  },
};

export default SettingsPage;
