const Customer = require("../models/Customer");
const { validationResult } = require("express-validator");

const createCustomer = async (req, res) => {
	const result = validationResult(req);
	if (!result.isEmpty()) {
		return res.status(400).json({ error: result.array() });
	}
	const { name, balance, account_no } = req.body;
	try {
		const newCustomer = new Customer({
			name: name,
			account_no: account_no,
			balance: balance,
		});

		const savedCustomer = await newCustomer.save();
		return res.status(201).json({
			customer: savedCustomer,
		});
	} catch (err) {
		return res.status(500).json({ error: err.message });
	}
};

const getCustomers = async (req, res)=> {
	try{
		const customers = await Customer.find().select("id name account_no balance")
		return res.status(200).json({customers})
	}catch(err){
		return res.status(500).json({error: err.message})
	}
}

module.exports = { createCustomer, getCustomers };
