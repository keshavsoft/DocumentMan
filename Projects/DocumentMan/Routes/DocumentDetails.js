var express = require('express');
var router = express.Router();
let Controller = require("../controllers/DocumentDetails.controller");

router.post('/', Controller.getDocumentDetails);

module.exports = router;