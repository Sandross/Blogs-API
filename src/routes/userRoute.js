const express = require('express');
const userController = require('../database/controllers/userController');
const validateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', userController.user);
router.get('/', validateToken, userController.getUsers);
router.get('/:id', validateToken, userController.getUserById);

module.exports = router;