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
        var result = this.repo.getProduct(productId)
        if (result != null) {
            return result
        } else {
            throw new Error('Product not found')
        }
    }

    /**
     * @param {String} name
     * @param {number} price
     */
    createProduct(name, price) {
        if (name.length > 0) {
            if (price > 0) {
                return this.repo.createProduct(name, price);
            } else {
                throw new Error('Price must be greater than zero');
            }
        } else {
            throw new Error('Name must not be empty');
        }
    }
}

module.exports = ProductService