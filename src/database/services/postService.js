const Models = require('../models');
const CustomError = require('../../utils/CustomError');
require('dotenv').config();

const getAllCategories = async () => {
    const categories = await Models.Category.findAll();
    return categories;
};

const getCategoryById = async (id) => {
    const category = await Models.Category.findByPk(id);
    if (!category) {
        throw new CustomError(404, 'Post does not exist');
    }
    return category;
};

module.exports = { getCategoryById, getAllCategories };