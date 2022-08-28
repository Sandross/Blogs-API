const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const loginRouter = require('./routes/loginRoute');
// const loginAuth = require('./middlewares/authMiddleware');

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use(errorHandler);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
