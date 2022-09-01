module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: { type: DataTypes.INTEGER, 
        alowNull: false, 
         primaryKey: true,
         unique: true, 
         autoIncrement: true },
        name: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'Categories',
    });
    return Category;
    }