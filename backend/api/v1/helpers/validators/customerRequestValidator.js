const { body } = require("express-validator");

const createCustomerValidator = [
	body("name").isString().withMessage("Name should be a string"),
	body("account_no")
		.isNumeric()
		.withMessage("Account number should be a number")
		.isLength({ min: 10, max: 10 })
		.withMessage("Account number must be 10 digits"),
	body("balance")
		.optional({ checkFalsy: true })
		.isNumeric()
		.withMessage("Balance should be a number"),
];

module.exports = { createCustomerValidator };
