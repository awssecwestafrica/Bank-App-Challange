const router = require("express").Router();
const {
	createCustomer,
	getCustomers,
} = require("../controllers/customerController");
const {
	createCustomerValidator,
} = require("../helpers/validators/customerRequestValidator");

router.post("", createCustomerValidator, createCustomer);

router.get("", getCustomers);

module.exports = router;
