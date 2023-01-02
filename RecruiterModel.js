const mongoose = require("mongoose");
const recruiterSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      requied: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Recruiter", recruiterSchema);
