const router = require("express").Router();
const { getTransactions } = require("../controllers/transactionController");

router.get("", getTransactions);

module.exports = router;
