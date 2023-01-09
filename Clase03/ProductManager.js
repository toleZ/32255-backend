import fs from "fs";

class ProductManager {
  #id = 0;

  constructor(path) {
    this.path = path;

    fs.writeFileSync(path, JSON.stringify([]));
  }

  getProducts = () => {
    const res = fs.readFileSync(this.path, "utf-8");
    return JSON.parse(res);
  };

  getProductById = (prodId) => {
    const res = fs.readFileSync(this.path, "utf-8");
    const product = JSON.parse(res).find((prod) => prod.id == prodId);

    if (!product)
      throw Error(`
    No encontre el producto con id:${prodId}`);
    else return product;
  };

  addProduct = (product) => {
    const products = this.getProducts();

    const newProduct = { id: this.#id++, ...product };

    products.push(newProduct);
    fs.writeFileSync(this.path, JSON.stringify(products));
  };

  updateProduct = (prodId, toUpdate) => {
    const prodExist = this.getProductById(prodId);

    if (!prodExist) throw Error(`No encontre el producto con id:${prodId}`);
    else {
      const products = this.getProducts();

      const updatedProducts = products.map((prod) => {
        return prod.id === prodId ? { ...prod, ...toUpdate } : prod;
      });

      fs.writeFileSync(this.path, JSON.stringify(updatedProducts));
    }
  };

  deleteProduct = (prodId) => {
    const products = this.getProducts();
    const productIndex = products.findIndex((prod) => prod.id === prodId);

    const deletedProduct = products.splice(productIndex, 1);

    fs.writeFileSync(this.path, JSON.stringify(products));

    return deletedProduct;
  };
}

const p1 = { name: "John", lastname: "Doe" };
const p2 = { name: "Mark", lastname: "Zuk" };

const pe = new ProductManager("./ejemplo.txt");
pe.addProduct(p1);
pe.addProduct(p2);
pe.updateProduct(1, { name: "Markus" });
