import { categoryModel } from "../models/category.model.js";
import { modelProduct } from "../models/product.model.js";
export const getCategorys = async (req, res) => {
  try {
    const response = await categoryModel.findAll();
    console.log("res",response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export const getCategoryByroduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await modelProduct.findAll({
      where: {
        categoryId: id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { description, name } = req.body;
    const category = {
      name,
      description,
    };
    const response = await categoryModel.create(category);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
export const uptadeCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, name } = req.body;

    const category = await categoryModel.findByPk(id);
    category.name = name;
    category.description = description;
    await category.save();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
