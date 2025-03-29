import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.errorContainer}>
          <h1>Something went wrong.</h1>
          <p>
            Please try refreshing the page or contact support if the issue
            persists.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#ffebee",
    color: "#d32f2f",
    textAlign: "center",
    padding: "20px",
  },
};

export default ErrorBoundary;
