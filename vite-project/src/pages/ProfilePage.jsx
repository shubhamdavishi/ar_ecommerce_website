import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotificationToast from "../components/NotificationToast";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    setToastMessage("Profile updated successfully!");
    setToastType("success");
    setShowToast(true);
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <h1>My Profile</h1>
        <div style={styles.profileCard}>
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              style={styles.input}
            />
          ) : (
            <p>{profileData.name}</p>
          )}

          <label>Email:</label>
          <p>{profileData.email}</p>

          <label>Phone:</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              style={styles.input}
            />
          ) : (
            <p>{profileData.phone}</p>
          )}

          {isEditing ? (
            <button onClick={handleSave} style={styles.button}>
              Save
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} style={styles.button}>
              Edit
            </button>
          )}
        </div>
      </div>
      <Footer />
      <NotificationToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        type={toastType}
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
    maxWidth: "400px",
    margin: "0 auto",
    color: "#333",
  },
  profileCard: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "2px solid #4A90E2",
    borderRadius: "8px",
  },
  button: {
    backgroundColor: "#4A90E2",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "15px",
  },
};

export default ProfilePage;
