var express = require('express');
var router = express.Router();
let Controller = require("../controllers/LoanDetails.controller");

router.post('/', Controller.getLoansDetails);

module.exports = router;