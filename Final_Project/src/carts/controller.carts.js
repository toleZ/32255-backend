const { Router } = require("express");
const Carts = require("./CartsManager");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const carts = await Carts.getCarts();
    res.status(200).json(carts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/", (req, res) => {
  try {
    const cart = Carts.createCart();
    res
      .status(200)
      .json(
        cart && { message: `Se ha generado el carrito con el id: ${cart.id}` }
      );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/:cid", async (req, res) => {
  const { cid } = req.params;
  try {
    const cart = await Carts.getCartById(Number(cid));
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/:cid/product/:pid", async (req, res) => {
  const { cid, pid } = req.params;
  const { quantity } = req.body;

  try {
    const cart = await Carts.addProductToCart(Number(cid), {
      pid: Number(pid),
      quantity,
    });
    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
