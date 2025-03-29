const mongoose = require("mongoose");

const ObjectDetectionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    detectedObjects: [
      {
        label: String,
        confidence: Number,
        boundingBox: {
          x: Number,
          y: Number,
          width: Number,
          height: Number,
        },
      },
    ],
    detectedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ObjectDetection", ObjectDetectionSchema);
