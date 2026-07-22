// app.js used for server configuration and middleware setup

const express = require('express');
const cookieParser = require("cookie-parser");
const authRouter = require('./routers/auth.route');
const musicRouter = require('./routers/music.routes');
const authMiddleware = require('./middlewares/auth.middleware');


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/music', musicRouter);


module.exports = app;