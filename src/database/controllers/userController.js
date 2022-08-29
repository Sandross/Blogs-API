const userService = require('../services/userService');
const controllerWrapper = require('../../middlewares/controllerWrapper');

const user = controllerWrapper(async (req, res) => {
    const token = await userService(req);
    res.status(201).json({
        token,
    });
});

module.exports = { user };