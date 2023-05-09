require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI =
	process.env["MONGO_URI"] || "mongodb://127.0.0.1:27017/DevOps";

mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = { db };
