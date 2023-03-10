import { Products } from "./ProductsManager.js";
import express from "express";

const port = 8080;
const app = express();
app.use(express.json());

app.listen(port, () => console.log(`Listening on port:${port}`));

app.get("/products", async (req, res) => {
  const { limit } = req.query;
  const prods = await Products.getProducts();

  if (!limit) res.status(200).json(prods);
  else res.status(200).json(prods.slice(0, limit));
});

app.get("/products/:pid", async (req, res) => {
  const { pid } = req.params;

  try {
    const prod = await Products.getProductById(pid);
    res.status(200).json(prod);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
