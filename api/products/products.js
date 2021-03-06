let express = require('express');
let router = express.Router();

let io = require('../socket');

let productService = require('./product.service');

router.get('/', (req, res) => {
    io.emit('foo', 'bar');

    productService.getProducts(+req.query.page, +req.query.limit)
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
});

router.get('/:id', (req, res) => {
    productService.getProduct(req.params.id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err));
});

module.exports = router;