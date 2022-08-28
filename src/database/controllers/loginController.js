const loginService = require('../services/loginService');
const controllerWrapper = require('../../middlewares/controllerWrapper');

const login = controllerWrapper(async (req, res) => {
    // const { email, password } = req.body;
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const token = await loginService.login(req.body.password, req.body.email);
    if (!token) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    return res.status(200).json({ token });
  });
 module.exports = { login };