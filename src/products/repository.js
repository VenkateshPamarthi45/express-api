//@ts-check

class ProductRepository {

    constructor() {

    }

    products = {};

    /**
     * @param {string} productId
     */
    getProduct(productId) {
        if (productId in this.products) {
            return this.products[productId];
        } else {
            return null
        }
    }

    /**
     * @param {String} name
     * @param {number} price
     */
    createProduct(name, price) {
        var id = Object.keys(this.products).length + 1;
        this.products[id] = {
            "product_id": id,
            "name": name,
            "price": price
        }
        return this.products[id];
    }
}

module.exports = ProductRepository