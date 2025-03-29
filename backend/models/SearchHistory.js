const mongoose = require("mongoose");

const SearchHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    resultsCount: {
      type: Number,
      default: 0,
    },
    searchedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SearchHistory", SearchHistorySchema);
