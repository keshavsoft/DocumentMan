var express = require('express');
var router = express.Router();
let CommonPage = require('./Routes/Page1');

router.use('/Page1', CommonPage);

module.exports = router;