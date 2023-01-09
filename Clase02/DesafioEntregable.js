class ProductManager {
  #products;
  #id = 0;

  constructor() {
    this.#products = [];
  }

  addProduct(tile, description, price, thumbnail, code, stock) {
    const alredyCode = this.#products.some((product) => product.code === code);
    if (alredyCode)
      throw error(`There is already a product with the code: ${code}`);

    const id = this.#id++;
    const product = { id, tile, description, price, thumbnail, code, stock };

    this.#products.push(product);
  }

  getProducts() {
    return this.#products;
  }

  getProductById(productId) {
    const product = this.#products.find((product) => product.id === productId);

    return (
      product || console.error(`No product found with the ID: ${productId}`)
    );
  }
}
