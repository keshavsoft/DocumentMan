var express = require('express');
var router = express.Router();
let Controller = require("../controllers/documents.controller");

router.get('/All', Controller.getDocuments);
router.post('/', Controller.CreateDocument);

module.exports = router;