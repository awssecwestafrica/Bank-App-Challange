const Customer = require("../../models/Customer");
const { body } = require("express-validator");

const createCustomerValidator = [
	body("name").isString().withMessage("Name should be a string"),
	body("account_no")
		.isNumeric()
		.withMessage("Account number should be a number")
		.isLength({ min: 10, max: 10 })
		.withMessage("Account number must be 10 digits")
		.custom(async value => {
			const user = await Customer.findOne({ account_no: value });
			if (user) throw new Error("Account number already in use");
		}),
	body("balance")
		.optional({ checkFalsy: true })
		.isNumeric()
		.withMessage("Balance should be a number"),
];

module.exports = { createCustomerValidator };
