var express = require('express');
var router = express.Router();
const controller = require('../controllers/profile');

/* GET home page. */
router.get('/', controller.profile);

module.exports = router;
