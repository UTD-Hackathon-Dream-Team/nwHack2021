const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Add a Name"],
  },
  Email: {
    type: String,
    required: [true, "Add an email"],
  },
  Password: {
    type: String,
    required: [true, "Add a password"],
  },
  Phone: {
    type: Number,
    required: [true, "Add a phone number"],
  },
  Rating: {
    sum: {
      type: Number,
      default: 0,
    },
    number: {
      type: Number,
      default: 0,
    },
  },
  Postings: [mongoose.Schema.Types.ObjectId],
  Comments: [
    {
      Upvote: {
        type: Boolean,
      },
      Downvote: {
        type: Boolean,
      },
      Body: {
        type: String,
      },
      User: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
