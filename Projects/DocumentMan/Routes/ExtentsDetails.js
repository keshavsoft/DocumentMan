var express = require('express');
var router = express.Router();
let Controller = require("../controllers/ExtentsDetails.controller");

router.put('/Insert/:inLoanRef', Controller.InsertExtentsDetails);
router.get('/:inLoanRef', Controller.getExtentsDetails);

module.exports = router;