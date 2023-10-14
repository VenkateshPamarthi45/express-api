const repo = require('../repository');
const service = require('../service')
jest.mock('../repository');

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    repo.mockClear();
});

it('should create repo when service is called', () => {
    const productService = new service();
    expect(repo).toHaveBeenCalledTimes(1);
});

it('should return product from repo when service is called', () => {
    var product_id = 5

    repo.mockImplementation(() => {
        return {
            getProduct: () => {
                return {
                    "product_id": product_id,
                    "name": "pixel",
                    "price": 1200
                }
            },
        };
    });

    const productService = new service();
    var result = productService.getProduct(product_id)
    expect(result).toEqual({
        "product_id": product_id,
        "name": "pixel",
        "price": 1200
    });

});

it('should return error from service when repo returns null', () => {
    var product_id = 5

    repo.mockImplementation(() => {
        return {
            getProduct: () => {
                return null
            },
        };
    });

    const productService = new service();
    expect(() => productService.getProduct(product_id)).toThrow();
});


describe('Create Product', () => {
    it('should return error when name is empty', () => {
        const productService = new service()
        var name = ""
        var price = 1200

        expect(() => productService.createProduct(name, price)).toThrow();
    });

    it('should return error when price is 0', () => {
        const productService = new service()
        var name = "Iphone"
        var price = 0
        expect(() => productService.createProduct(name, price)).toThrow();
    });

    it('should return error when repo product is null', () => {
        const productService = new service()
        var name = "Iphone"
        var price = 1200
        repo.mockImplementation(() => {
            return {
                createProduct: () => {
                    return {}
                },
            };
        });
        expect(() => productService.createProduct(name, price)).toThrow();
    });

});