const Models = require('../models');
const CustomError = require('../../utils/CustomError');
require('dotenv').config();

const getAllPosts = async () => {
    const categories = await Models.BlogPost.findAll({
        include: [
            { model: Models.User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Models.Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return categories;
};

const getPostById = async (id) => {
    const posts = await Models.BlogPost.findOne({ 
        where: { id },
        include: [
            { model: Models.User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Models.Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    if (!posts) {
        throw new CustomError(404, 'Post does not exist');
    }
    return posts;
};

module.exports = { getPostById, getAllPosts };