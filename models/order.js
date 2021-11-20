const { Schema, model } = require("mongoose");
const moment = require("moment");

const phoneRegex = /^(?:\+38)?(0\d{9})$/;

const orderSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for order"],
    },
    phone: {
      type: String,
      required: [true, "Set phone for order"],
      match: phoneRegex,
    },
    time: {
      type: String,
      required: [true, "Set time for order"],
    },
    date: {
      type: String,
      default: () => moment(Date.now()).format("DD.MM.YYYY"),
    },
    dateToReady: {
      type: String,
      required: [true, "Set dateToReady for order"],
    },
    weight: {
      type: Number,
      required: [true, "Set weight for order"],
    },
    price: {
      type: Number,
      required: [true, "Set price for order"],
    },
    prepayment: {
      type: Number,
      required: [true, "Set prepayment for order"],
    },
    filling: {
      type: String,
      required: [true, "Set filling for order"],
    },
    description: {
      type: String,
      required: [true, "Set description for order"],
    },
    img: { type: Schema.Types.Mixed, default: false },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const Order = model("order", orderSchema);

module.exports = Order;
