const repo = require('../repository')
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

it('should call repo get product 5 when service is called with get product 5 ', () => {

    const productService = new service();
    var product_id = 5
    productService.getProduct(product_id)
    //mock class
    const mockRepoInstance = repo.mock.instances[0];
    //mock method
    const mockGetProduct = mockRepoInstance.getProduct;

    expect(mockGetProduct.mock.calls[0][0]).toBe(product_id);
    expect(mockGetProduct).toHaveBeenCalledTimes(1);
    expect(mockGetProduct).toHaveBeenCalledWith(product_id);
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

it('should return error from repo when service is called', () => {
    var product_id = 5

    repo.mockImplementation(() => {
        return {
            getProduct: () => {
                throw new Error('Test error');
            },
        };
    });

    const productService = new service();
    expect(() => productService.getProduct(product_id)).toThrow();
});