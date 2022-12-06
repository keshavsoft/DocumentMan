var express = require('express');
var router = express.Router();
let Controller = require("../controllers/DocumentDetails.controller.js");

router.get('/:inLoanRef', Controller.getDocumentDetails);
router.post('/', Controller.getDocumentDetailsFromPost);
router.put('/Insert/:inLoanRef', Controller.InsertDocumentDetails);


module.exports = router;