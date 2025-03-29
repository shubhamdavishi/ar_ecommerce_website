const mongoose = require("mongoose");

const ARSessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      default: 0,
    },
    interactions: {
      type: Number,
      required: true,
      default: 0,
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ARSession", ARSessionSchema);
