// <!-- <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Product AR Viewer</title>
//     <script
//       type="module"
//       src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
//     ></script>
//     <style>
//       body {
//         display: flex;
//         height: 100vh;
//         justify-content: center;
//         align-items: center;
//         background-color: #f3f4f6;
//         font-family: Arial, sans-serif;
//         margin: 0;
//       }
//       .product-container {
//         text-align: center;
//         background-color: #ffffff;
//         padding: 20px;
//         border-radius: 12px;
//         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//         max-width: 400px;
//         width: 100%;
//       }
//       model-viewer {
//         width: 100%;
//         height: 400px;
//         background-color: #e0e0e0;
//         border-radius: 12px;
//       }
//       .product-info {
//         margin-top: 15px;
//       }
//     </style>
//   </head>
//   <body>
//     <div class="product-container">
//       <h1>3D AR Product Viewer</h1>
//       <model-viewer
//         src="/assets/models/cup.glb"
//         ar
//         camera-controls
//         auto-rotate
//         poster="/assets/images/black.png"
//         shadow-intensity="1"
//       >
//       </model-viewer>
//       <div class="product-info">
//         <h2>Coffee Cup</h2>
//         <p>Experience this product in augmented reality!</p>
//       </div>
//     </div>
//   </body>
// </html> -->

import React from 'react';

const ProductPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
        fontFamily: 'Arial, sans-serif',
        margin: 0,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h1>3D AR Product Viewer</h1>
        <model-viewer
          src="/assets/models/cup.glb"
          ar
          camera-controls
          auto-rotate
          poster="/assets/images/black.png"
          shadow-intensity="1"
          style={{
            width: '100%',
            height: '400px',
            backgroundColor: '#e0e0e0',
            borderRadius: '12px',
          }}
        />
        <div style={{ marginTop: '15px' }}>
          <h2>Coffee Cup</h2>
          <p>Experience this product in augmented reality!</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
