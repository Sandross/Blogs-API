const express = require('express');
const categoriesController = require('../database/controllers/categoriesController');
const validateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', validateToken, categoriesController.createCategory);
router.get('/', validateToken, categoriesController.getAllCategories);

module.exports = router;