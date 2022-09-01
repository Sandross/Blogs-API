const Models = require('../models');
const CustomError = require('../../utils/CustomError');
require('dotenv').config();

const createNewCategory = async ({ name }) => {
    if (!name) {
        throw new CustomError(400, '"name" is required');
    }

    console.log(name);
    const exist = await Models.Category.findOne({ where: { name } });
    if (exist) {
        throw new CustomError(409, 'Category already registered');
    }

    const newCategory = await Models.Category.create({ name });

    return newCategory;
};

    module.exports = { createNewCategory };