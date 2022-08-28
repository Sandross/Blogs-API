const jwt = require('jsonwebtoken');
const Models = require('../models');
const CustomError = require('../../utils/CustomError');
 require('dotenv').config();

 const { JWT_SECRET } = process.env;
 
 const login = async (password, email) => {
   if (email === '' || password === '') {
     throw new CustomError(400, 'Some required fields are missing');
   }
   const userLogin = await Models.User.findOne({ where: { email } });
   if (!userLogin) {
   throw new CustomError(400, 'Invalid fields');
   }
   const payload = { email: userLogin.dataValues.email };
   const token = jwt.sign(payload, JWT_SECRET, {
     expiresIn: '1d',
     algorithm: 'HS256',
   });
   return token;
 };
 module.exports = { login };