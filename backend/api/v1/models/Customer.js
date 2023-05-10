const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
	name: { type: String, required: true },
	account_no: { type: Number, required: true, unique: true },
	balance: { type: Number, default: 0.00 },
}, {timestamps: true});

module.exports = mongoose.model("Customer", CustomerSchema);
