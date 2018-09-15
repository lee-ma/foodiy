module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      field: 'id',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'firstName',
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'lastName',
      allowNull: false
    },
    googleId: {
      type: DataTypes.STRING,
      field: 'googleId',
      allowNull: true
    },
    avatarImage: {
      type: DataTypes.STRING,
      field: 'avatarImage',
      allowNull: true
    }
  })

  User.associate = model => {
    const { Recipe } = model

    User.hasMany(Recipe, { as: "recipes" })
    User.hasMany(Comment, { as: "comments" })
  }

  return User
}
