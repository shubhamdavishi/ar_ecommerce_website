import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const ProductModel = ({ modelUrl }) => {
  const modelRef = useRef();
  const [model, setModel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => setModel(gltf.scene),
      undefined,
      (err) => setError("Error loading model: ${err.message}")
    );
  }, [modelUrl]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return model ? (
    <primitive object={model} ref={modelRef} />
  ) : (
    <p>Loading model...</p>
  );
};

const ProductARViewer = ({ modelUrl }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>3D AR Product Viewer</h1>
      <Canvas style={styles.canvas} camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={<p>Loading 3D Model...</p>}>
          <ProductModel modelUrl={modelUrl} />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    margin: "20px auto",
  },
  title: {
    marginBottom: "15px",
    fontSize: "1.5rem",
    color: "#333",
  },
  canvas: {
    width: "100%",
    height: "400px",
    borderRadius: "12px",
    backgroundColor: "#e0e0e0",
  },
};

export default ProductARViewer;
