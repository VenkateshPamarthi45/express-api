//@ts-check

class ProductRepository {

    constructor() {

    }

    /**
     * @type {any}
     */
    products = [];

    /**
     * @param {string} productId
     */
    getProduct(productId) {
        return {
            "product_id": productId,
            "name": "iphone",
            "price": 1200
        }
    }
}

module.exports = ProductRepository