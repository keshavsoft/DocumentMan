var express = require('express');
var router = express.Router();
let Controller = require("../controllers/LoanDetails.controller");
let ControllerSave = require("../controllers/documents.Save");

router.post('/', Controller.getLoansDetails);
router.post('/Save', ControllerSave.getDocumentDetails);

module.exports = router;