let express = require('express');
let app = express();

let products = require('./products/products');
let categories = require('./categories/categories');
// let tags = require('./tags/tags');
let dashboard = require('./dashboard/dashboard');
let search = require('./search/search');

app.use('/api/products', products);
app.use('/api/categories', categories);
// app.use('/api/tags', tags);
app.use('/api/dashboard', dashboard);
app.use('/api/search', search);

module.exports = app;