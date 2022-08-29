const express = require('express');
const userController = require('../database/controllers/userController');

const router = express.Router();

router.post('/', userController.user);

module.exports = router;