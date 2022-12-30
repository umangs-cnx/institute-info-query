const mongoose = require("mongoose");

const USER_ROLES = {
  INSTRUCTOR: 'instructor',
  LEARNER: 'learner',
  ADMIN: 'admin',
  PARENT: 'parent'
};

const instituteRoles = new mongoose.Schema({
  instituteId: String,
  roles: [String]
});

const User = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    kneuraId: String,

    // User's role in the Default institute
    roles: [
      {
        type: String,
        enum: Object.values(USER_ROLES),
        required: true
      }
    ],
    username: { type: String },
    email: String,
    phone: String,
    password: String,
    emailVerified: { type: Boolean, default: false },
    lastActivity: { type: Date, default: Date.now }, // For tracking dead accounts
    createdAt: { type: Date, default: Date.now },
    temporaryEmail: String,
    profile_url: String,
    s3data: Object,
    isDeleted: { type: Boolean, default: false },
    myInstitutes: [instituteRoles],
    institutes: [instituteRoles],
    deviceId: String,
    androidDevices: [Object],
    parentAndroidDevices: [Object],
    iOSDevices: [Object],
    razorpayCustomerId: String,
    preferredLanguage: { type: String, default: "en" }
  }
);

module.exports = mongoose.model("User", User);
