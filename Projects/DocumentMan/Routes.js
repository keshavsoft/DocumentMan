var express = require('express');
var router = express.Router();

let CommonPage = require('./Routes/Page1');
let CommonLoans = require('./Routes/Loans');
let CommonLoanDetails = require('./Routes/LoanDetails');
let CommonDocumentDetails = require('./Routes/DocumentDetails');
let CommonExtentsDetails = require('./Routes/ExtentsDetails');

router.use('/Page1', CommonPage);
router.use('/Loans', CommonLoans);
router.use('/LoanDetails', CommonLoanDetails);
router.use('/DocumentDetails', CommonDocumentDetails);
router.use('/ExtentsDetails', CommonExtentsDetails);

module.exports = router;