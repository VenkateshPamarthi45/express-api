// @ts-check

const ProductRepository = require("./repository")

class ProductService {

    constructor() {
        this.repo = new ProductRepository()
    }

    /**
     * @param {string} productId
     */
    getProduct(productId) {
        return this.repo.getProduct(productId)
    }
}

module.exports = ProductService