const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    fullName: {
      type: String,
      default: "",
      trim: true,
    },

    mobileNumber: {
      type: String,
      default: null,
      trim: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    status: {
      type: String,
      enum: ["active", "inactive", "pending"],
      default: "active",
    },

    loginFirstTime: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

/* Password hash */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

/* Compare password */
userSchema.methods.matchPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);