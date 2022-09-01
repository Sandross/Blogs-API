const express = require('express');
const categoriesController = require('../database/controllers/categoriesController');
const validateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', validateToken, categoriesController.createCategory);

module.exports = router;