const mongoose = require("mongoose");

const user_Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: 3
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      minlength: 3
    },
    createdate: {
        type: Date,
        required: true,
        default: Date.now()
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', user_Schema);
module.exports = User;
