var express = require('express');
var router = express.Router();

let productService = require('./product-service');
let tagService = require('../tags/tag-service');

let db = require('../../config/db');

router.get('/', (req, res) => {
    productService.getProducts()
        .then(products => res.send(products))
        .catch((err) => res.status(500).send(err));
});

router.get('/:id', (req, res) => {
    productService.getProduct(req.params.id)
        .then(products => res.send(products))
        .catch((err) => res.status(500).send(err));
});

router.get('/:id/tags', (req, res) => {
    tagService.getTagsByProduct(req.params.id)
        .then(tags => res.send(tags))
        .catch((err) => res.status(500).send(err));
});

router.post('/', (req, res) => {
    productService.addProduct(req.body, 2)
        .then(() => res.sendStatus(200))
        .catch((err) => res.status(500).send(err));
});

router.get('/categories/:id', (req, res) => {
    productService.getProductByCategory(req.params.id)
        .then(products => res.send(products))
        .catch((err) => res.status(500).send(err));
});

module.exports = router;