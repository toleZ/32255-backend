const fs = require("fs");

const prodProto = {
  title: "string",
  description: "string",
  code: "string",
  price: "number",
  status: "boolean",
  stock: "number",
  category: "string",
};

const checkParams = (proto, prod) => {
  Object.entries(proto).forEach((entrie) => {
    if (typeof prod[entrie[0]] !== entrie[1])
      throw Error(`${prod[entrie[0]]} must be need a type: ${entrie[1]}`);
  });
};

class ProductManager {
  #id = 0;

  constructor(path) {
    this.path = path;

    if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify([]));
  }

  getProducts = () => {
    const prods = fs.readFileSync(this.path, "utf-8");
    return JSON.parse(prods);
  };

  getProductById = (pid) => {
    const prods = this.getProducts();
    const product = prods.find((prod) => Number(prod.id) === Number(pid));

    if (!product) throw Error(`No encontre el producto con id: ${pid}`);
    return product;
  };

  addProduct = (product) => {
    const products = this.getProducts();

    while (products.some((prod) => prod.id === this.#id)) this.#id++;

    const newProduct = {
      id: this.#id,
      ...product,
      status: (product.status ??= true),
    };

    checkParams(prodProto, product);

    products.push(newProduct);
    fs.writeFileSync(this.path, JSON.stringify(products));

    return newProduct;
  };

  updateProduct = (prodId, toUpdate) => {
    const product = this.getProductById(prodId);

    if (!product) throw Error(`No encontre el producto con id: ${prodId}`);

    const products = this.getProducts();

    const updatedProducts = products.map((prod) => {
      return prod.id === prodId ? { ...prod, ...toUpdate } : prod;
    });

    fs.writeFileSync(this.path, JSON.stringify(updatedProducts));

    return this.getProductById(prodId);
  };

  deleteProduct = (prodId) => {
    const products = this.getProducts();
    const productIndex = products.findIndex((prod) => prod.id === prodId);

    if (productIndex === -1)
      throw Error(`No encontre el producto con el id: ${prodId}`);

    const deletedProduct = products.splice(productIndex, 1);

    fs.writeFileSync(this.path, JSON.stringify(products));

    return deletedProduct;
  };
}

const Products = new ProductManager("products/products.json");

module.exports = Products;
