import { modelProduct } from "../models/product.model.js";
export const getProducts = async (req, res) => {
  try {
    const response = await modelProduct.findAll();

    res.send(response);
  } catch (error) {}
};
export const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { name, price, stock, categoryId } = req.body;
    const product = await modelProduct.create({
      name,
      price,
      stock,
      categoryId,
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await modelProduct.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export const uptadeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { price, stock, name, categoryId } = req.body;

    const product = await modelProduct.findByPk(id);
    product.name = name;
    product.price = price;
    product.categoryId = categoryId;
    product.stock = stock;
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
