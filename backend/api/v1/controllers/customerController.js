const { Customers } = require("../models/Customer");
const { validationResult } = require("express-validator");

const createCustomer = (req, res) => {
	const result = validationResult(req);
	if (!result.isEmpty()) {
		return res.status(400).json({ error: result.array() });
	}
	const { name, balance, account_no } = req.body;
	try {
		const uid = Customers.length + 1
		const newCustomer = {
			id: uid,
			name: name,
			account_no: account_no,
			balance: balance || 0,
		};

		Customers.push(newCustomer);
		return res.status(201).json({
			customer: newCustomer,
		});
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
};

const getCustomers = async (req, res) => {
	try {
		return res.status(200).json({ customers: Customers });
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
};

module.exports = { createCustomer, getCustomers };
