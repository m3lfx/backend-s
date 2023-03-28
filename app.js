const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');
const errorMiddleware = require('./middlewares/errors');

app.use(express.json({ limit: '100mb' }));
app.use(cookieParser());
app.use(express.urlencoded({limit: "100mb", extended: true }));


app.use('/api/v1', products);
app.use('/api/v1',auth);
app.use('/api/v1', order);

app.use(errorMiddleware);

module.exports = app