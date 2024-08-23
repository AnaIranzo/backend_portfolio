const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();



router.get('/', controller.getData);
router.get('/about', controller.getDataAbout);
router.get('/contact', controller.getDataAContact);




module.exports = router;