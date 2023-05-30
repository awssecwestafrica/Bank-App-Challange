const { Transactions } = require("../models/Transaction");

const getTransactions = (req, res) => {

	return res.status(200).json({transactions: Transactions});
};

module.exports = { getTransactions };
