// Imports ...
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { json, urlencoded } = require("express");

const { db } = require("./database");

const app = express();

db.once("open", () => console.log("Database connected"));
db.on("error", (error) => console.error(error));

app.use(cors())
app.use(morgan("common"))
app.use(helmet())

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("", (req, res) => {
	return res.status(200).json("Hello!");
});

module.exports = app;
