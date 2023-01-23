const Products = require("./ProductsManager");
const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  const { limit } = req.query;
  const prods = await Products.getProducts();

  if (!limit) res.status(200).json(prods);
  else res.status(200).json(prods.slice(0, limit));
});

router.get("/:pid", async (req, res) => {
  const { pid } = req.params;

  try {
    const prod = await Products.getProductById(pid);
    res.status(200).json(prod);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const prod = await Products.addProduct(req.body);

    res.status(200).json(prod);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.put("/:pid", async (req, res) => {
  const { pid } = req.params;

  try {
    const updatedProduct = await Products.updateProduct(Number(pid), req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete("/:pid", async (req, res) => {
  const { pid } = req.params;

  try {
    const deletedProduct = await Products.deleteProduct(Number(pid));
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
