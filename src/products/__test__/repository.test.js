const ProductRepository = require('../repository')

describe('Get Product', () => {
    it('should return product from repo ', () => {
        var repo = new ProductRepository();
        repo.products = {
            3: {
                "product_id": 3,
                "name": "iphone",
                "price": 1200
            }
        }

        var result = repo.getProduct(3)
        expect(result).toEqual({
            "product_id": 3,
            "name": "iphone",
            "price": 1200
        });
    });

    it('should return null if product not found ', () => {
        var repo = new ProductRepository();
        repo.products = {}

        var result = repo.getProduct(4)
        expect(result).toEqual(null);
    });
});

describe('Create Product', () => {
    it('should add new product from repo with existing product', () => {
        var repo = new ProductRepository();
        repo.products = {
            1: {
                "product_id": 1,
                "name": "iphone",
                "price": 1200
            }
        }

        var result = repo.createProduct("pixel", 1000)
        expect(Object.keys(repo.products).length).toEqual(2);
        expect(result).toEqual({
            "product_id": 2,
            "name": "pixel",
            "price": 1000
        });
    });

    it('should add new product from repo with existing product', () => {
        var repo = new ProductRepository();
        repo.products = {
        }

        var result = repo.createProduct("pixel", 1000)
        expect(Object.keys(repo.products).length).toEqual(1);
        expect(result).toEqual({
            "product_id": 1,
            "name": "pixel",
            "price": 1000
        });
    });
});
