const jwt = require('jsonwebtoken');
const Models = require('../models');
const CustomError = require('../../utils/CustomError');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const alreadyExist = async (email) => {
    const exist = await Models.User.findOne({ where: { email } });
    if (exist) {
     throw new CustomError(409, 'User already registered');
    }
};

const validateNameLength = (name) => {
    if (name.length < 8) {
        throw new CustomError(400, '"displayName" length must be at least 8 characters long');
    }
};

const userLogged = async (req) => {
    const { displayName, email, password } = req.body;
    validateNameLength(displayName);
    const pattern = /^\w*@\w*\.com$/g; // Email validation pattern
    if (!pattern.test(email)) {
        throw new CustomError(400, '"email" must be a valid email');
    }   
    if (password.length < 6) {
        throw new CustomError(400, '"password" length must be at least 6 characters long');
    }
    await alreadyExist(email);
    await Models.User.create(req.body);
   const token = jwt.sign({ email }, JWT_SECRET, {
     expiresIn: '1d',
     algorithm: 'HS256',
   });
   return token;
};

const getUsers = async () => {
    const users = await Models.User.findAll({ attributes: { exclude: ['password'] } });
    if (!users) {
        throw new CustomError(404, 'No users found');
    }
    return users;
};

module.exports = { userLogged, getUsers };