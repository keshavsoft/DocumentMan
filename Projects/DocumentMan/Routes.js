var express = require('express');
var router = express.Router();
let CommonDocuments = require('./Routes/Documents');

router.use('/Documents', CommonDocuments);

module.exports = router;