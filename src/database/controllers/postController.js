const postService = require('../services/postService');
const controllerWrapper = require('../../middlewares/controllerWrapper');

// const createPost = async (req, res) => {
//   const { title, content, categoryIds } = req.body;
//   const { id } = req.user;
//   const post = await postService.createPost(title, content, categoryIds, id);
//   return res.status(201).json(post);
// };
const getAllCategories = controllerWrapper(async (_req, res) => {
  const categories = await postService.getAllCategories();
  return res.status(200).json(categories);
});

const getCategoryById = controllerWrapper(async (req, res) => {
    const { id } = req.params;
    const category = await postService.getCategoryById(id);
    return res.status(200).json(category);
    });

module.exports = { getCategoryById, getAllCategories };
