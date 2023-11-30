const mongo = require("mongoose");
const user = new mongo.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);
const modelUser = mongo.model("users", user);
module.exports = modelUser;
