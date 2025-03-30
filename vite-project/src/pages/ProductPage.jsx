// import React from "react";

// const ProductPage = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         height: "100vh",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f3f4f6",
//         fontFamily: "Arial, sans-serif",
//         margin: 0,
//       }}
//     >
//       <div
//         style={{
//           textAlign: "center",
//           backgroundColor: "#ffffff",
//           padding: "20px",
//           borderRadius: "12px",
//           boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
//           maxWidth: "400px",
//           width: "100%",
//         }}
//       >
//         <h1>3D AR Product Viewer</h1>
//         <div style={{ marginTop: "15px" }}>
//           <h2>Coffee Cup</h2>
//           <p>Experience this product in augmented reality!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ARModelViewer = () => {
//   return (
//     <model-viewer
//       src="../assets/models/cup.glb"
//       ar
//       camera-controls
//       auto-rotate
//       poster="../assets/images/black.png"
//       shadow-intensity="1"
//       style={{
//         width: "100%",
//         height: "400px",
//         backgroundColor: "#e0e0e0",
//         borderRadius: "12px",
//       }}
//     />
//   );
// };

// export default ProductPage;

import React from "react";
import "@google/model-viewer";
import cup from '../../public/assets/models/cup.glb'
const ProductPage = () => {
  return (
    <div>
      <h1>Product Details</h1>

      {/* AR Model Viewer Inside Product Page */}
      <div>
        <model-viewer
          src={cup}
          ar
          camera-controls
          auto-rotate
          poster="../assets/images/black.png"
          shadow-intensity="1"
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "#e0e0e0",
            borderRadius: "12px",
          }}
        />
      </div>

      <p>This is an awesome product with AR features!</p>
    </div>
  );
};

export default ProductPage;
