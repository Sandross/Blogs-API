const categoriesService = require('../services/categoriesService');
const controllerWrapper = require('../../middlewares/controllerWrapper');

const createCategory = controllerWrapper(async (req, res) => {
  const { name } = req.body;
  const category = await categoriesService.createNewCategory({ name });
  return res.status(201).json(category);
});

module.exports = { createCategory };
