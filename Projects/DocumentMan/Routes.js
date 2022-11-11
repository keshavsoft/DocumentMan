var express = require('express');
var router = express.Router();

let CommonDocuments = require('./Routes/Documents');
let CommonPage = require('./Routes/Page1');


router.use('/Documents', CommonDocuments);
router.use('/Page1', CommonPage);

module.exports = router;