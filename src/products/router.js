//@ts-check

var express = require('express')
var productService = require('./service.js')
var service = new productService()

var products = express.Router()

products.get('/:product_id', (req, res) => {
    return res.send(service.getProduct(req.params.product_id))
})


/*products.post('', function (req, res) {
    return res.send({
        "id": req.body.id,
        "name": req.body.name,
        "price": req.body.price
    })
});*/

module.exports = products