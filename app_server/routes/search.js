var express = require('express');
var router = express.Router();
const controller = require('../controllers/search');

/* GET home page. */
router.get('/', controller.search);

module.exports = router;
