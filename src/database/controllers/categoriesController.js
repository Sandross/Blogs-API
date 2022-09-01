const categoriesService = require('../services/categoriesService');
const controllerWrapper = require('../../middlewares/controllerWrapper');

const createCategory = controllerWrapper(async (req, res) => {
  const { name } = req.body;
  const category = await categoriesService.createNewCategory({ name });
  return res.status(201).json(category);
});

const getAllCategories = controllerWrapper(async (_req, res) => {
  const categories = await categoriesService.getAllCategories();
  return res.status(200).json(categories);
});

module.exports = { createCategory, getAllCategories };
