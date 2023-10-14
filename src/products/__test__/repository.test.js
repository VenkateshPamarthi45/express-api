const ProductRepository = require('../repository')

it('should return product from repo ', () => {
    var repo = new ProductRepository();
    var result = repo.getProduct(3)
    expect(result).toEqual({
        "product_id": 3,
        "name": "iphone",
        "price": 1200
    });
});