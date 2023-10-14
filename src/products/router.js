//@ts-check

var express = require('express')
var productService = require('./service.js')
var service = new productService()

var products = express.Router()

products.get('/:product_id', (req, res) => {
    try {
        var result = service.getProduct(req.params.product_id)
        res.send(result)
    } catch (error) {
        console.error(error);
        return res.status(404).send({ "message": error.message })
    }
})


products.post('', function (req, res) {
    try {
        var result = service.createProduct(req.body.name, req.body.price)
        return res.send(result)
    } catch (error) {
        console.error(error);
        return res.status(400).send({ "message": error.message })
    }
});

module.exports = products