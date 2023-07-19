var express = require('express');
var router = express.Router();
const controller = require('../controllers/messages');

/* GET home page. */
router.get('/', controller.messages);

module.exports = router;
