module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, 
        alowNull: false,  primaryKey: true, unique: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users',
    });
 
    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        foreignKey: 'userId', as: 'posts',
      });
    };
 
    return User;
  };