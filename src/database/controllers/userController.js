const userService = require('../services/userService');
const controllerWrapper = require('../../middlewares/controllerWrapper');

const user = controllerWrapper(async (req, res) => {
    const token = await userService.userLogged(req);
    res.status(201).json({
        token,
    });
});

const getUsers = controllerWrapper(async (req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
});

const getUserById = controllerWrapper(async (req, res) => {
    const { id } = req.params;
    const users = await userService.getUsers();
    const userId = users.find((e) => +e.id === +id);
    if (!userId) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    res.status(200).json(userId);
});

module.exports = { user, getUsers, getUserById };