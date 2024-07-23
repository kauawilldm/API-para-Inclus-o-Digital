const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

router.get('/free', coursesController.getFreeCourses);

module.exports = router;
