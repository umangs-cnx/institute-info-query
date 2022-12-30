const mongoose = require("mongoose");

const InstituteAccount = new mongoose.Schema({
  name: String,
  kneuraId: String,
  email: String,
  password: String,
  code: String,
  admins: [{ user: { type: String, ref: "User" }, permissions: String }],
  teachers: [{ type: String }],
  learners: [{ type: String }],
  classes: [{ type: String }],
  devices: [{ type: String }],
  parentInstituteAccount: { type: String, ref: "InstituteAccount" },
  address: String,
  profile_url: String,
  s3data: Object
});

module.exports = mongoose.model("InstituteAccount", InstituteAccount);
