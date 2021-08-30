const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // trim extra white space
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true, // convert to lowercase
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"], // enumurations
      default: "user", // default value
    },
  },
  {
    timestamps: true, // for createdAt and UpdatedAt
  }
);

const People = mongoose.Model("People", peopleSchema);

module.exports = People;
