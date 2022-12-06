var express = require('express');
var router = express.Router();
let Controller = require("../controllers/page1.controller");

router.post('/', Controller.CreatePage);
router.patch('/Update', Controller.UpdateDocumentDetails);

module.exports = router;