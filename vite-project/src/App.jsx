import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import NotificationToast from "./components/NotificationToast";

// Pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductSearch from "./pages/ProductSearch";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import ARExperiencePage from "./pages/ARExperiencePage";
import DashboardPage from "./pages/DashboardPage";
import Settings from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Navbar />
          <NotificationToast />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/ar-experience" element={<ARExperiencePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
