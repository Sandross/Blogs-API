const jwt = require('jsonwebtoken');

 const { JWT_SECRET } = process.env;

 const validateToken = (req, res, next) => {
   const { authorization: token } = req.headers;
   if (!token) {
     return res.status(401).json({ message: 'Token not found' });
   }
   jwt.verify(token, JWT_SECRET, (error) => {
     if (error) {
       return res.status(401).json({ message: 'Expired or invalid token ' });
     }
     next();
   });
 };

 module.exports = { validateToken };