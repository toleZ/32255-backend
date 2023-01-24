const fs = require("fs");
const Products = require("../products/ProductsManager");

class CartsManager {
  #id = 0;

  constructor(path) {
    this.path = path;

    if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify([]));
  }

  getCarts = () => {
    const carts = fs.readFileSync(this.path, "utf-8");
    return JSON.parse(carts);
  };

  getCartById = (cid) => {
    const carts = fs.readFileSync(this.path, "utf-8");
    const cart = JSON.parse(carts).find((cart) => cart.id === cid);

    if (!cart) throw Error(`No encontre el carrito con id: ${cid}`);
    return cart;
  };

  createCart = (cid) => {
    const carts = this.getCarts();

    const newCart = { id: cid, products: [] };

    carts.push(newCart);
    fs.writeFileSync(this.path, JSON.stringify(carts));

    return newCart;
  };

  addProductToCart = (cid, { pid, quantity = 1 }) => {
    let carts = this.getCarts();
    const cart =
      carts.find((cart) => cart.id === cid) ?? this.createCart(Number(cid));

    carts = this.getCarts();
    const { id } = Products.getProductById(pid);

    if (!cart.products.some((p) => p.productId === pid))
      cart.products.push({ productId: id, quantity: 0 });

    cart.products.map((p) =>
      Number(p.productId) === Number(pid)
        ? { ...p, quantity: (p.quantity += Number(quantity)) }
        : p
    );

    const updatedCarts = carts.map((c) => (c.id === cid ? cart : c));
    fs.writeFileSync(this.path, JSON.stringify(updatedCarts));

    return cart;
  };
}

const Carts = new CartsManager("carts/carts.json");

module.exports = Carts;
