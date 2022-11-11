var express = require('express');
var router = express.Router();

let CommonDocuments = require('./Routes/Documents');
let CommonPage = require('./Routes/Page1');
let CommonLoans = require('./Routes/Loans');


router.use('/Documents', CommonDocuments);
router.use('/Page1', CommonPage);
router.use('/Loans', CommonLoans);

module.exports = router;