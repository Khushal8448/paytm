const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      index: true,
    },
    firstName: {
      type: String,
      require: true,
      index: true,
      trim: true,
    },
    lastName: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      minLength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
