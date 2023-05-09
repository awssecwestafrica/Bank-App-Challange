const express = require("express");
const { json, urlencoded } = require("express");

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("", (req, res) => {
	return res.status(200).json("Hello!");
});

module.exports = app;
