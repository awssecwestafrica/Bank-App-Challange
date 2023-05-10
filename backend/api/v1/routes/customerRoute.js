const router = require("express").Router();
const { createCustomer } = require("../controllers/customerController");
const {
	createCustomerValidator,
} = require("../helpers/validators/customerRequestValidator");

router.post("", createCustomerValidator, createCustomer);

module.exports = router;
