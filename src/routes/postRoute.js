const express = require('express');
const postController = require('../database/controllers/postController');
const validateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', validateToken, postController.getAllCategories);
router.get('/:id', validateToken, postController.getCategoryById);
// router.post('/', validateToken, postController.createPost);

module.exports = router;