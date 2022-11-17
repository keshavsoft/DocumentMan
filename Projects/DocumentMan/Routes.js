var express = require('express');
var router = express.Router();

let CommonPage = require('./Routes/Page1');
let CommonLoans = require('./Routes/Loans');
let CommonLoanDetails = require('./Routes/LoanDetails');
let CommonDocumentDetails = require('./Routes/DocumentDetails');

router.use('/Page1', CommonPage);
router.use('/Loans', CommonLoans);
router.use('/LoanDetails', CommonLoanDetails);
router.use('/DocumentDetails', CommonDocumentDetails);

module.exports = router;