var express = require('express');
var router = express.Router();
let Controller = require("../controllers/Loans.controller");

router.get('/', Controller.getLoans);

module.exports = router;