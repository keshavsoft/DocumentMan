var express = require('express');
var router = express.Router();
let Controller = require("../controllers/DocumentDetails.controller.js");

router.post('/', Controller.getDocumentDetails);
router.put('/Insert/:inLoanRef', Controller.InsertDocumentDetails);

module.exports = router;