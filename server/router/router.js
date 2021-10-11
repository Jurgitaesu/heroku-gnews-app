const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');
const validateInput = require('../middleware/validateInput');

// Save searched keyword
router.post('/saveKeyword', validateInput, controller.saveKeyword);

// Save user clicked details of article
router.post('/saveDetails', controller.saveDetails);

module.exports = router;