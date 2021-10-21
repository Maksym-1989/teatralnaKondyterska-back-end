const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const moment = require("moment");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email must be exist"],
      match: emailRegex,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password must be exist"],
      minlength: 6,
    },
    subscription: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    token: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default:() => moment().format("DD.MM.YYYY, HH:mm"),
    },
  },

  {
    versionKey: false,
    timestamps: false,
  }
);

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model("user", userSchema);

module.exports = User;
